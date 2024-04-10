export type NavLink = {
  id: number;
  name: string;
  href: string;
  image?: Image;
};

export type Image = {
  id: number;
  path: string;
  width?: number;
  height?: number;
  description: string;
};

// mark for deletion
// refactor to Image def first
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

export type ToggleStates = {
  [key: string]: boolean;
};

export type ToggleAction = {
  type: string;
  section: string;
};
