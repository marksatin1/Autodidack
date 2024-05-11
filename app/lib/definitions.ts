export type NavLink = {
  id: number;
  name: string;
  href: string;
  disabled: boolean;
  image?: ImageType;
};

export type ImageType = {
  id: number;
  path: string;
  width: number;
  height: number;
  description: string;
  name?: string;
};

export type CollageImage = {
  id: number;
  description: string;
  path: string;
  width: number;
  height: number;
  x_coord: number;
  y_coord: number;
  audio_id: number;
  audio_path: string;
  audio_type: string;
};

export type AudioFile = {
  id: number;
  path: string;
  type: string;
  title: string;
  artist: string;
  year: number;
};

export type PageType = {
  id: number;
  name: string;
  description: string;
  keywords: string[];
};

export type GalleryType = {
  id: number;
  name: string;
  description: string;
  keywords: string[];
  image_path: string;
  image_width: number;
  image_height: number;
  image_description: string;
};

export type Visitor = {
  name: string;
  email: string;
  reason: string;
  message: string;
};

export type FormButton = {
  id: string;
  type: "submit" | "reset" | "button" | undefined;
  icon: ImageType;
  disabled: boolean;
};
