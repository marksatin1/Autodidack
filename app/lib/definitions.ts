export type NavLink = {
  name: string;
  href: string;
};

export type Photo = {
  id: number | string;
  url: string;
  width: number;
  height: number;
  description: string;
};

export type Gallery = {
  id: number | string;
  name: string;
  path: string;
  photo: Photo;
};
