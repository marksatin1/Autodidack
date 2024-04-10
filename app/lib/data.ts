import { NavLink, Photo } from "./definitions";

export const internalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Web",
    href: "/web",
  },
  {
    id: 2,
    name: "Photo",
    href: "/photo",
  },
  { id: 3, name: "About", href: "/about" },
];

export const externalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/the_unforecasted_storm/",
    image: {
      id: 1,
      path: "/icons/2x/128/Instagram.png",
      width: 32,
      height: 32,
      description: "Color icon of the Instagram logo",
    },
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/marksatin1",
    image: {
      id: 2,
      path: "/icons/2x/128/GitHub.png",
      width: 32,
      height: 32,
      description: "Color icon of the GitHub logo",
    },
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marksatin/",
    image: {
      id: 3,
      path: "/icons/2x/128/LinkedIn.png",
      width: 32,
      height: 32,
      description: "Color icon of the LinkedIn logo",
    },
  },
  {
    id: 4,
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e472c9e11ddcf814",
    image: {
      id: 4,
      path: "/icons/2x/128/Upwork.png",
      width: 32,
      height: 32,
      description: "Color icon of the Upwork logo",
    },
  },
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
