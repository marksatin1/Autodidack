import { CollageImage, NavLink } from "./definitions";

export const internalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Photo",
    href: "/photo",
  },
  {
    id: 2,
    name: "Web",
    href: "/web",
  },
  { id: 3, name: "About", href: "/about" },
  { id: 4, name: "Store", href: "/store" },
];

export const externalNavLinks: NavLink[] = [
  {
    id: 1,
    name: "Instagram",
    href: "https://www.instagram.com/the_unforecasted_storm/",
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
    image: {
      id: 4,
      path: "/icons/256/Upwork.png",
      width: 256,
      height: 256,
      description: "Color icon of the Upwork logo",
    },
  },
];

// order based on stacking order
// export const collageImages: CollageImage[] = [
//   {
//     id: 1,
//     path: "/collage-images/_0000_Surfer.png",
//     width: 223,
//     height: 471,
//     description: "Man holding a surfboard",
//     xCoord: 1232,
//     yCoord: 232,
//   },
//   {
//     id: 2,
//     path: "/collage-images/_0001_Street-Sweeper.png",
//     width: 207,
//     height: 401,
//     description: "A man holding a broom",
//     xCoord: 1757,
//     yCoord: 487,
//   },
//   {
//     id: 3,
//     path: "/collage-images/_0002_Purple-Jackets.png",
//     width: 286,
//     height: 473,
//     description: "A couple wearing purple jackets walking",
//     xCoord: 169,
//     yCoord: 665,
//   },

//   {
//     id: 5,
//     path: "/collage-images/_0004_Blue-Jacket.png",
//     width: 149,
//     height: 348,
//     description: "A woman with a blue jacket walking",
//     xCoord: 1937,
//     yCoord: 443,
//   },
//   {
//     id: 6,
//     path: "/collage-images/_0005_Army-Jacket.png",
//     width: 152,
//     height: 383,
//     description: "A man with an army jacket walking",
//     xCoord: 2365,
//     yCoord: 480,
//   },
//   {
//     id: 7,
//     path: "/collage-images/_0006_Hasid-Kids.png",
//     width: 352,
//     height: 288,
//     description: "A group of Hasidic Jewish children looking at something offscreen",
//     xCoord: 969,
//     yCoord: 1498,
//   },
//   {
//     id: 8,
//     path: "/collage-images/_0007_Duffle-Bag-Guys.png",
//     width: 301,
//     height: 306,
//     description: "Two guys carrying duffle bags walking",
//     xCoord: 488,
//     yCoord: 766,
//   },
//   {
//     id: 9,
//     path: "/collage-images/_0008_Dog.png",
//     width: 173,
//     height: 247,
//     description: "A small white dog with its tongue out",
//     xCoord: 910,
//     yCoord: 1268,
//   },
//   {
//     id: 10,
//     path: "/collage-images/_0009_Hasid-Women.png",
//     width: 291,
//     height: 412,
//     description: "Two Hasidic Jewish women carrying bags and walking towards the viewer",
//     xCoord: 944,
//     yCoord: 151,
//   },
//   {
//     id: 11,
//     path: "/collage-images/_0010_BnW-LES-Men.png",
//     width: 331,
//     height: 403,
//     description: "Two men carrying plastic bags and walking away from the viewer",
//     xCoord: 1910,
//     yCoord: 742,
//   },
//   {
//     id: 15,
//     path: "/collage-images/_0014_Cops.png",
//     width: 684,
//     height: 463,
//     description:
//       "A group of cops in riot gear walking in unison and staring directly at the viewer",
//     xCoord: 217,
//     yCoord: 1056,
//   },
//   {
//     id: 16,
//     path: "/collage-images/_0015_Brown-Vest-Neon.png",
//     width: 206,
//     height: 529,
//     description:
//       "A group of cops in riot gear walking in unison and staring directly at the viewer",
//     xCoord: 729,
//     yCoord: 134,
//   },
//   {
//     id: 18,
//     path: "/collage-images/_0017_Orange-Jacket.png",
//     width: 349,
//     height: 566,
//     description: "A man with an orange rain jacket walking and looking directly at the viewer",
//     xCoord: 440,
//     yCoord: 164,
//   },

//   {
//     id: 20,
//     path: "/collage-images/_0019_Blue-Shoes-Runner.png",
//     width: 233,
//     height: 339,
//     description: "A man with blue shoes jogging",
//     xCoord: 1541,
//     yCoord: 469,
//   },
//   {
//     id: 21,
//     path: "/collage-images/_0020_BnW-Mex-Men.png",
//     width: 287,
//     height: 309,
//     description: "Two men walking and looking at something offscreen",
//     xCoord: 1280,
//     yCoord: 1190,
//   },
//   {
//     id: 22,
//     path: "/collage-images/_0021_White-Shirt-Runner.png",
//     width: 142,
//     height: 331,
//     description: "A girl in a white shirt jogging",
//     xCoord: 2221,
//     yCoord: 717,
//   },
//   {
//     id: 23,
//     path: "/collage-images/_0022_Pink-Jacket-Runner.png",
//     width: 156,
//     height: 265,
//     description: "A woman in a shiny pink jacket holding a phone and jogging",
//     xCoord: 763,
//     yCoord: 688,
//   },
//   {
//     id: 24,
//     path: "/collage-images/_0023_Look-Back-Man.png",
//     width: 175,
//     height: 360,
//     description: "A man with a N95 mask walking and looking back behind him",
//     xCoord: 916,
//     yCoord: 570,
//   },
//   {
//     id: 25,
//     path: "/collage-images/_0024_Josh.png",
//     width: 265,
//     height: 536,
//     description: "A man in a bathing suit looks at something offscreen",
//     xCoord: 2291,
//     yCoord: 881,
//   },
//   {
//     id: 26,
//     path: "/collage-images/_0025_Beach-Runner.png",
//     width: 83,
//     height: 145,
//     description: "A man in a swimsuit jogging",
//     xCoord: 2047,
//     yCoord: 1027,
//   },
//   {
//     id: 27,
//     path: "/collage-images/_0026_Matt.png",
//     width: 156,
//     height: 287,
//     description: "A boy wrapped in a beach towel",
//     xCoord: 1752,
//     yCoord: 929,
//   },
//   {
//     id: 28,
//     path: "/collage-images/_0027_Haris.png",
//     width: 406,
//     height: 631,
//     description: "A man standing atop a big rock and flexing his arms",
//     xCoord: 1303,
//     yCoord: 552,
//   },
//   {
//     id: 29,
//     path: "/collage-images/_0028_Sunglasses-Couple.png",
//     width: 263,
//     height: 339,
//     description: "A couple wearing sunglasses and walking",
//     xCoord: 1516,
//     yCoord: 794,
//   },
//   {
//     id: 31,
//     path: "/collage-images/_0030_Sign.png",
//     width: 402,
//     height: 469,
//     description: "A sign reading ADVERTISE HERE!",
//     xCoord: 2208,
//     yCoord: 79,
//   },
//   {
//     id: 30,
//     path: "/collage-images/_0029_Color-Mex-Men.png",
//     width: 261,
//     height: 380,
//     description: "Two men in hats and sweatshirts walking",
//     xCoord: 2100,
//     yCoord: 352,
//   },
//   {
//     id: 32,
//     path: "/collage-images/_0031_Cat.png",
//     width: 772,
//     height: 403,
//     description: "A stray cat with brown and black stripes on the prowl",
//     xCoord: 1417,
//     yCoord: 126,
//   },
//   {
//     id: 4,
//     path: "/collage-images/_0003_Mark.png",
//     width: 659,
//     height: 444,
//     description: "A man with shorts and a backwards baseball cap lying on his stomach",
//     xCoord: 1081,
//     yCoord: 1341,
//   },
//   {
//     id: 12,
//     path: "/collage-images/_0011_Sleeping-Guy.png",
//     width: 865,
//     height: 544,
//     description: "A homeless man sleeping on a cement block",
//     xCoord: 108,
//     yCoord: 1244,
//   },
//   {
//     id: 14,
//     path: "/collage-images/_0013_Garbage-Bin.png",
//     width: 506,
//     height: 395,
//     description: "A green industrial garbage bin with a skull graffiti",
//     xCoord: 790,
//     yCoord: 885,
//   },
//   {
//     id: 13,
//     path: "/collage-images/_0012_Leon.png",
//     width: 288,
//     height: 465,
//     description: "A man smoking a cigarette and talking on the phone",
//     xCoord: 1033,
//     yCoord: 633,
//   },
//   {
//     id: 17,
//     path: "/collage-images/_0016_Bike-Boy.png",
//     width: 510,
//     height: 644,
//     description:
//       "A man with a neon lime green sweatshirt and a brown vest walking away from the viewer",
//     xCoord: 106,
//     yCoord: 123,
//   },
//   {
//     id: 19,
//     path: "/collage-images/_0018_Tire-Man.png",
//     width: 1041,
//     height: 676,
//     description: "A man placing a car tire onto a pile of other car tires",
//     xCoord: 1561,
//     yCoord: 1114,
//   },
// ];

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
};
