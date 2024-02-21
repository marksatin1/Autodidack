"use server";

import { createClient } from "@supabase/supabase-js";
import { Photo } from "./definitions";

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export async function getEntrancePhoto() {
  const { data, error } = await supabase.from("photos").select("*").eq("page_id", 1);

  if (error) {
    console.error("Error fetching entrance photo", error);
    // Display error handling to client
  }

  if (data && data.length === 1) {
    const { id, description, url, width_px, height_px } = data[0];
    return {
      id,
      description,
      url,
      width: width_px,
      height: height_px,
    };
  }
}

export async function getHomePhotos() {
  const { data, error } = await supabase.from("photos").select("*").eq("page_id", 2);

  if (error) {
    console.error("Error fetching homepage photos", error);
    // Display error handling to client
  }

  if (data && data.length > 0) {
    return data.map(p => {
      const { id, description, url, width_px, height_px } = p;
      return {
        id,
        description,
        url,
        width: width_px,
        height: height_px,
      };
    });
  }
}
