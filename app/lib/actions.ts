"use server";

import { createClient } from "@supabase/supabase-js";
import { AudioFile, ImageType, GalleryType, PageType, CollagePhotoType } from "./definitions";

// SETUP
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!);

// API CALLS
export async function getOnePhoto(photoid: number) {
  const { data, error } = await supabase.from("photos").select("*").eq("id", photoid).limit(1);

  if (error) {
    throw new Error(
      `${error.code}: Error retrieving Photo ID# ${photoid}: ${error.message}`
    );
  }

  if (data.length === 1) {
    const { id, description, url, width, height }: ImageType = data[0];
    return {
      id,
      description,
      url,
      width,
      height,
    };
  }
}

export async function getCollagePhotos() {
  const { data, error } = await supabase.rpc("get_collage_photos");

  if (error) {
    throw new Error(
      `${error.code}: Error retrieving collage photos: ${error.message}`
    );
  }

  if (data.length > 0) {
    return data.map((p: CollagePhotoType) => {
      const {
        id,
        description,
        url,
        width,
        height,
        x_coord,
        y_coord,
        audio_id,
        audio_url,
        audio_type,
      } = p;
      return {
        id,
        description,
        url,
        width,
        height,
        x_coord,
        y_coord,
        audio_id,
        audio_url,
        audio_type,
      };
    });
  }
}

// returns all photos in random order OR all photos of specific gallery in random order
// variable names must be lowercase to work with supabase rpc - annoying
export async function getGalleryPhotos(galleryid?: number) {
  const { data, error } = await supabase.rpc("get_photos_in_random_order", {
    galleryid,
  });

  if (error) {
    throw new Error(
      `${error.code}: Error accessing photos in random order: ${error.message}`
    );
  }

  if (data.length > 0) {
    return data.map((p: CollagePhotoType) => {
      const {
        id,
        description,
        url,
        width,
        height,
        x_coord,
        y_coord,
        audio_id,
        audio_url,
        audio_type,
      } = p;
      return {
        id,
        description,
        url,
        width,
        height,
        x_coord,
        y_coord,
        audio_id,
        audio_url,
        audio_type,
      };
    });
  }
}

export async function getPageMetadata(pageid?: number) {
  const { data, error } = await supabase.rpc("get_page_metadata", {
    pageid,
  });

  if (error) {
    console.error(error);
    throw new Error(`${error.code}: Error accessing page metadata: ${error.message}`);
  }

  if (data.length > 0) {
    return data.map((p: PageType) => {
      const { id, name, description, keywords } = p;
      return {
        id,
        name,
        description,
        keywords,
      };
    });
  }
}

export async function getGalleriesInfo(galleryid?: number) {
  const { data: galleryData, error } = await supabase.rpc("get_galleries_info", {
    galleryid
  });

  if (error) {
    throw new Error(`Error accessing galleries info: ${error}`);
  }

  if (galleryData.length > 0) {
    return galleryData.map((g: GalleryType) => {
      const {
        id,
        name,
        description,
        keywords,
        image_url,
        image_width,
        image_height,
        image_description,
      } = g;
      return {
        id,
        name,
        description,
        keywords,
        image_url,
        image_width,
        image_height,
        image_description,
      };
    });
  }
}

export async function getAudioInRandomOrder(albumid?: number) {
  const { data: audioFiles, error } = await supabase.rpc("get_audio_in_random_order", { albumid });

  if (error) {
    throw new Error(`Error accessing audio in random order: ${error}`);
  }

  if (audioFiles.length > 0) {
    return audioFiles.map((a: AudioFile) => {
      const { id, url, type, title, artist, year } = a;
      return {
        id,
        url,
        type,
        title,
        artist,
        year,
      };
    });
  }
}

export default async function addVisitorData(formData: FormData) {
  try {
    const { name, email, reason, message } = Object.fromEntries(formData);

    const { data } = await supabase
      .from("visitor_contacts")
      .insert([{ name, email, reason, message }])
      .select();

    if (data) {
      console.log("New visitor data successfully updated in the database.");
      return data[0].name;
    }
  } catch (error: any) {
    throw new Error(
      `${error.code}: ${error.name} thrown while adding visitor data to the backend: ${error.message}`
    );
  }
}
