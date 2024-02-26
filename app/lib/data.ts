import { Gallery, NavLink, Photo } from "./definitions";

export const navLinks: NavLink[] = [
  {
    name: "Galleries",
    href: "/galleries",
  },
  { name: "About", href: "/about" },
];

export const slides: Photo[] = [
  {
    id: 1,
    url: "/1.jpg",
    width: 500,
    height: 500,
    description: "Test",
  },
  {
    id: 2,
    url: "/2.jpg",
    width: 500,
    height: 500,
    description: "Test",
  },
  {
    id: 3,
    url: "/3.jpg",
    width: 500,
    height: 500,
    description: "Test",
  },
  {
    id: 4,
    url: "/4.jpg",
    width: 500,
    height: 500,
    description: "Test",
  },
  {
    id: 5,
    url: "/5.jpg",
    width: 500,
    height: 500,
    description: "Test",
  },
];

export const sections = [
  {
    title: "About The Site",
    content: "Description about me",
  },
  {
    title: "About The Photography",
    content: "Description about the photography",
  },
  {
    title: "About The Site",
    content: "Description about the web site",
  },
];
