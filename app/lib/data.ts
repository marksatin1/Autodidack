import { NavLink } from "./definitions";

export const internalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Photo",
    href: "/photo",
    disabled: false,
  },
  {
    id: 2,
    name: "Web",
    href: "/web",
    disabled: true,
  },
  { id: 3, name: "Info", href: "/info", disabled: false },
];

export const externalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/the_unforecasted_storm/",
    disabled: false,
    image: {
      id: 1,
      path: "/icons/256/Instagram.png",
      width: 256,
      height: 256,
      description: "Color icon of the Instagram logo",
    },
  },
  {
    id: 2,
    name: "GitHub",
    href: "https://github.com/marksatin1",
    disabled: false,
    image: {
      id: 2,
      path: "/icons/256/GitHub.png",
      width: 256,
      height: 256,
      description: "Color icon of the GitHub logo",
    },
  },
  {
    id: 3,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/marksatin/",
    disabled: false,
    image: {
      id: 3,
      path: "/icons/256/LinkedIn.png",
      width: 256,
      height: 256,
      description: "Color icon of the LinkedIn logo",
    },
  },
  {
    id: 4,
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01e472c9e11ddcf814",
    disabled: false,
    image: {
      id: 4,
      path: "/icons/256/Upwork.png",
      width: 256,
      height: 256,
      description: "Color icon of the Upwork logo",
    },
  },
];

export const icons = {
  download: {
    id: 1,
    path: "/icons/256/Download.png",
    width: 256,
    height: 256,
    description: "An arrow pointing down into an inbox",
  },
  submit: {
    id: 2,
    path: "/icons/256/Submit.png",
    width: 256,
    height: 256,
    description: "A paper plane tilted to the top right corner",
  },
  arrowLeftTilted: {
    id: 3,
    path: "/icons/256/ArrowLeftTilted.png",
    width: 256,
    height: 254,
    description: "Icon of an arrow pointing to the left",
  },
  arrowRightTilted: {
    id: 4,
    path: "/icons/256/ArrowRightTilted.png",
    width: 256,
    height: 254,
    description: "Icon of an arrow pointing to the right",
  },
  arrowRightThin: {
    id: 5,
    path: "/icons/256/ArrowRightThin.png",
    width: 256,
    height: 256,
    description: "Icon of an arrow pointing to the right",
  },
  arrowLeftThin: {
    id: 6,
    path: "/icons/256/ArrowLeftThin.png",
    width: 256,
    height: 256,
    description: "Icon of an arrow pointing to the right",
  },
  arrowRightThick: {
    id: 7,
    path: "/icons/256/ArrowRightThick.png",
    width: 256,
    height: 256,
    description: "Icon of an arrow pointing to the right",
  },
  arrowLeftThick: {
    id: 8,
    path: "/icons/256/ArrowLeftThick.png",
    width: 256,
    height: 256,
    description: "Icon of an arrow pointing to the right",
  },
  quiet: {
    id: 9,
    path: "/icons/256/Quiet.png",
    width: 256,
    height: 256,
    description: "Icon of a person with their finger over their mouth indicating silence",
  },
  listening: {
    id: 10,
    path: "/icons/256/Listening.png",
    width: 256,
    height: 256,
    description: "Icon of a person with their hand to their ear indicating listening",
  },
  handshake: {
    id: 11,
    path: "/icons/256/Handshake.png",
    width: 256,
    height: 256,
    description: "Icon of two hands shaking",
  },
};
