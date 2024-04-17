"use server";

import { createClient } from "@supabase/supabase-js";
import { AudioFile, ImageType } from "./definitions";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function getEntrancePhoto() {
  const { data, error } = await supabase.from("photos").select("*").eq("page_id", 1);

  if (error) {
    console.error(error);
    throw new Error("Error fetching entrance photo");
  }

  if (data.length === 1) {
    const { id, description, path, width, height }: ImageType = data[0];
    return {
      id,
      description,
      path,
      width,
      height,
    };
  }
}

export async function getHomePhotos() {
  // Remote Procedure Call stored in Supabase dashboard
  // lists images I don't want
  const { data, error } = await supabase.rpc("get_random_bg_photos").not("id", "eq", 108);

  if (error) {
    console.error(error);
    throw new Error("Error fetching homepage photos");
  }

  if (data.length > 0) {
    return data.map((p: ImageType) => {
      const { id, description, path, width, height } = p;
      return {
        id,
        description,
        path,
        width,
        height,
      };
    });
  }
}

export async function getGalleriesPagePhotos() {
  const { data: galleries, error } = await supabase
    .from("galleries")
    .select("*")
    .not("id", "eq", 7);

  if (error) {
    console.error(error);
    throw new Error("Error fetching Galleries page photos");
  }

  if (galleries.length > 0) {
    return galleries.map((g: ImageType) => {
      const { id, name, path, width, height, description } = g;
      return {
        id,
        name,
        path,
        width,
        height,
        description,
      };
    });
  }
}

export async function getGalleryPhotos(galleryId: number) {
  const { data: galleryPhotos, error } = await supabase
    .from("photos")
    .select("*")
    .eq("page_id", 3)
    .eq("gallery_id", galleryId);

  if (error) {
    console.error(error);
    throw new Error(`Error fetching photos for Gallery #${galleryId}`);
  }

  if (galleryPhotos.length > 0) {
    return galleryPhotos.map((p: ImageType) => {
      const { id, description, path, width, height } = p;
      return {
        id,
        description,
        path,
        width,
        height,
      };
    });
  }
}

export async function getAudioFiles() {
  const { data: audioFiles, error } = await supabase.from("audio").select("*");

  if (error) {
    console.error(error);
    throw new Error("Error fetching audio files");
  }

  if (audioFiles.length > 0) {
    return audioFiles.map((f: AudioFile) => {
      const { id, path, type, title, artist, year, format } = f;
      return {
        id,
        path,
        type,
        title,
        artist,
        year,
        format,
      };
    });
  }
}

export async function submitContactForm(e: any) {
  e.preventDefault();

  // Email contact form info to my email address

  // return some trigger to display success message
}
