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
  id: number;
  name: string;
  cover_url: string;
  cover_width_px: number;
  cover_height_px: number;
  description: string;
};

export type Section = {
  title: string;
  content: string;
};
