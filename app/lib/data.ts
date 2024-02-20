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
      id: "",
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
      id: "",
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
      id: "",
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
      id: "",
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
      id: "",
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
      id: "",
      url: "/Cowboy-Bebop-Wallpaper.jpg",
      width: 500,
      height: 500,
      description: "",
    },
  },
];

export const bgPhotos: Photo[] = [
  {
    id: 1,
    url: "/aut-bg-1.avif",
    width: 2000,
    height: 1639,
    description: "Test",
  },
  {
    id: 2,
    url: "/aut-bg-2.avif",
    width: 2000,
    height: 1643,
    description: "Test",
  },
  {
    id: 3,
    url: "/aut-bg-3.avif",
    width: 2000,
    height: 1639,
    description: "Test",
  },
  {
    id: 4,
    url: "/aut-bg-4.avif",
    width: 2000,
    height: 1633,
    description: "Test",
  },
  {
    id: 5,
    url: "/aut-bg-5.avif",
    width: 2000,
    height: 1638,
    description: "Test",
  },
  {
    id: 6,
    url: "/aut-bg-6.avif",
    width: 2000,
    height: 1637,
    description: "Test",
  },
  {
    id: 7,
    url: "/aut-bg-7.avif",
    width: 200,
    height: 1639,
    description: "Test",
  },
];
