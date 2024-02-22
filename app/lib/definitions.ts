export type NavLink = {
  name: string;
  href: string;
};

export type Photo = {
  id: number;
  description: string;
  url: string;
  width: number;
  height: number;
};

export type Gallery = {
  id: number | string;
  name: string;
  path: string;
  photo: Photo;
};

export type Section = {
  title: string;
  content: string;
}