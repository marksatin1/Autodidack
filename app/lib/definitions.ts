export type NavLink = {
  id: number;
  name: string;
  href: string;
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
  path: string;
  width: number;
  height: number;
  description: string;
  xCoord: number;
  yCoord: number;
};

export type AudioFile = {
  id: number;
  path: string;
  type: string;
  title: string;
  artist: string;
  year: number;
  format: string;
};
