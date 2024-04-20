// HTML5 <audio> element is still lacking. To get this playlist functionality to work
// I had to mash up declarative React with imperitave plain old vanilla JS 4-16-24

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { icons } from "../../lib/data";
import { getAudioFiles } from "../../lib/actions";
import { AudioFile } from "../../lib/definitions";

export default function AudioPlayer() {
  const [audioIconPath, setAudioIconPath] = useState<string>(icons.quiet.path);
  const [currentSongIdx, setCurrentSongIdx] = useState<number>(0);
  const [playlist, setPlaylist] = useState<AudioFile[] | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // must encapsulate async functionality because this is a Client Component
  useEffect(() => {
    (async () => {
      const data = await getAudioFiles(1);
      data && setPlaylist(data);
    })();
  }, []);

  function handlePlayPauseAudio() {
    // handle audio playback
    audioIconPath === icons.listening.path ? audioRef.current?.pause() : audioRef.current?.play();

    // handle icon change
    setAudioIconPath(prev =>
      prev === icons.listening.path ? icons.quiet.path : icons.listening.path
    );
  }

  // this function only runs if audioRef has loaded/first song has finished
  function handleNextSong() {
    const nextSongIdx = (currentSongIdx + 1) % playlist!.length;
    setCurrentSongIdx(nextSongIdx);

    audioRef.current!.src = playlist![nextSongIdx].path;
    audioRef.current!.load();
    audioRef.current!.play();
  }

  return (
    <div>
      {playlist && (
        <audio ref={audioRef} preload="auto" onEnded={handleNextSong}>
          <source src={playlist![currentSongIdx].path} type={playlist![currentSongIdx].type} />
        </audio>
      )}

      <Image
        src={audioIconPath}
        alt="Black and white icon signalling audio status"
        width={256}
        height={256}
        onClick={handlePlayPauseAudio}
        className="w-[24px] h-[24px]"
      />
    </div>
  );
}
