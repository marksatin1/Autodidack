// HTML5 <audio> element is still lacking. To get this playlist functionality to work
// I had to mash up declarative React with imperitave plain old vanilla JS 4-16-24

"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { icons } from "../../lib/data";
import { getAudioInRandomOrder } from "../../lib/actions";
import { AudioFile } from "../../lib/definitions";

export default function AudioPlayer() {
  const [audioIconPath, setAudioIconPath] = useState<string>(icons.quiet.url);
  const [currentSongIdx, setCurrentSongIdx] = useState<number>(0);
  const [playlist, setPlaylist] = useState<AudioFile[] | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // must encapsulate async functionality because this is a Client Component
  useEffect(() => {
    (async () => {
      const data = await getAudioInRandomOrder(1);
      data && setPlaylist(data);
    })();
  }, []);

  function handlePlayPauseAudio() {
    setIsPlaying(prev => !prev);

    // handle audio playback
    audioIconPath === icons.listening.url ? audioRef.current?.pause() : audioRef.current?.play();

    // handle icon change
    setAudioIconPath(prev =>
      prev === icons.listening.url ? icons.quiet.url : icons.listening.url
    );
  }

  // this function only runs if audioRef has loaded/first song has finished
  function handleNextSong() {
    const nextSongIdx = (currentSongIdx + 1) % playlist!.length;
    setCurrentSongIdx(nextSongIdx);

    audioRef.current!.src = playlist![nextSongIdx].url;
    audioRef.current!.load();
    audioRef.current!.play();
  }

  return (
    <div>
      {playlist && (
        <audio ref={audioRef} preload="auto" onEnded={handleNextSong}>
          <source src={playlist![currentSongIdx].url} type={playlist![currentSongIdx].type} />
        </audio>
      )}
      <Image
        src={isPlaying ? "/icons/256/Listening.png" : "/icons/256/Quiet.png"}
        alt="Black and white icon signalling audio status"
        width={256}
        height={256}
        onClick={handlePlayPauseAudio}
        onKeyDown={(e: any) => {
          e.key === "Enter" && handlePlayPauseAudio();
        }}
        role="button"
        aria-label="toggle audio"
        tabIndex={0}
        className="w-6 hover:scale-x-[2] cursor-pointer"
      />
    </div>
  );
}
