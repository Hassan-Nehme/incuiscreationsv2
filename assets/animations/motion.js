const dur = 800;

//*  Slide Left
export const slideLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Slide Left
export const slideRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Slide Top
export const slideTop = {
  initial: {
    opacity: 0,
    y: -100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Slide Bottom
export const slideBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Pop
export const enterPop = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: dur,
    },
  },
};

//*  fadeIn
export const enterFadeIn = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,

    transition: {
      duration: dur,
    },
  },
};
