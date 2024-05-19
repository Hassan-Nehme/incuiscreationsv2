const dur = 800;

//* Visible Once Slide Left
export const visibleOnceSlideLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,

    transition: {
      duration: dur,
    },
  },
};

//* Visible Once Slide Right
export const visibleOnceSlideRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  visibleOnce: {
    opacity: 1,
    x: 0,
    transition: {
      duration: dur,
    },
  },
};

// *Visible Once Slide Bottom
export const visibleOnceSlideBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

// *Visible Once Slide Top
export const visibleOnceSlideTop = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Visible Once Pop
export const visibleOncePop = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visibleOnce: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: dur,
    },
  },
};

//*  Visible FadeIn
export const visibleOnceFadeIn = {
  initial: {
    opacity: 0,
  },
  visibleOnce: {
    opacity: 1,
    transition: {
      duration: dur,
    },
  },
};
