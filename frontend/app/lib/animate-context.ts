export const dissolveVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const pageTransitionVariants = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    y: 5,
    opacity: 1,
  },
};

export const galleryTitleVariants = {
  hidden: { y: 0, opacity: 0, scaleX: 0.95 },
  visible: { y: -155, opacity: 1, scaleX: 1 },
};

export const footerVariants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: {
    y: 100,
    opacity: 0,
  },
};

export const carouselVariants = {
  initial: {
    height: "fit-content",
    opacity: 0,
  },
  animate: {
    height: "90vh",
    opacity: 1,
  },
};

export const loadingVariants = {
  initial: {
    width: "20%",
    height: "0rem",
  },
  grow: {
    width: "100%",
    height: "10rem",
    scaleX: 3,
  },
};
