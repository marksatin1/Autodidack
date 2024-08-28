export type NavLink = {
  id: number;
  name: string;
  href: string;
  disabled: boolean;
  image?: ImageType;
};

export type ImageType = {
  id: number;
  url: string;
  width: number;
  height: number;
  description: string;
  name?: string;
};

export type CollagePhotoType = {
  id: number;
  description: string;
  url: string;
  width: number;
  height: number;
  x_coord: number;
  y_coord: number;
  audio_id: number;
  audio_url: string;
  audio_type: string;
};

export type AudioFile = {
  id: number;
  url: string;
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
  image_url: string;
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
  ariaLabel: string;
  icon: ImageType;
  disabled: boolean;
};
