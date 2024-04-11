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

export type GalleryCover = {
  id: number;
  name: string;
  path: string;
  width: number;
  height: number;
  description: string;
};
