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

export const galleries: Gallery[] = [
  {
    id: 1,
    name: "black_and_white",
    path: "/galleries/black_and_white",
    photo: {
      id: 1,
      url: "/1.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
  {
    id: 2,
    name: "george_floyd_2020",
    path: "/galleries/george_floyd_2020",
    photo: {
      id: 2,
      url: "/2.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
  {
    id: 3,
    name: "landscapes",
    path: "/galleries/landscapes",
    photo: {
      id: 3,
      url: "/3.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
  {
    id: 4,
    name: "cityscapes",
    path: "/galleries/cityscapes",
    photo: {
      id: 4,
      url: "/4.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
  {
    id: 5,
    name: "street",
    path: "/galleries/street",
    photo: {
      id: 5,
      url: "/5.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
  {
    id: 6,
    name: "portraits",
    path: "/galleries/portraits",
    photo: {
      id: 6,
      url: "/Cowboy-Bebop-Wallpaper.jpg",
      width: 500,
      height: 500,
      description: "",
    },
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
