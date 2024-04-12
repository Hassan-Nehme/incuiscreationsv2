const dur = 800;

//* Visible Slide Left
export const visibleSlideLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: dur,
    },
  },
};

//* Visible Slide Right
export const visibleSlideRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: dur,
    },
  },
};

// *Visible Slide Bottom
export const visibleSlideBottom = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

// *Visible Slide Top
export const visibleSlideTop = {
  initial: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: dur,
    },
  },
};

//*  Visible Pop
export const visiblePop = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: dur,
    },
  },
};

//*  Visible FadeIn
export const visibleFadeIn = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 500,
    },
  },
};
