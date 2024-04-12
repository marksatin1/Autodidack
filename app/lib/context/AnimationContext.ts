import { createContext } from "react";

const initContext = {
  imageGrowth: false,
  setImageGrowth: (prev: boolean) => {
    !prev;
  },
  pageTransition: false,
  setPageTransition: (prev: boolean) => {
    !prev;
  },
};

export const AnimationContext = createContext(initContext);
