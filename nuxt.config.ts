// *Animation Imports
//& Visible Once
import {
  visibleOnceSlideBottom,
  visibleOnceSlideLeft,
  visibleOnceSlideRight,
  visibleOnceSlideTop,
  visibleOncePop,
  visibleOnceFadeIn,
  visibleOnceScaleRight,
} from "./assets/animations/motionVisibleOnce";

//& Visible
import {
  visibleSlideBottom,
  visibleSlideLeft,
  visibleSlideRight,
  visibleSlideTop,
  visiblePop,
  visibleFadeIn,
} from "./assets/animations/motionVisible";

//& Enter
import {
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
  enterPop,
  enterFadeIn,
} from "./assets/animations/motion";

export default defineNuxtConfig({
  devtools: { enabled: true },
  //& Modules
  modules: [
    // "@formkit/auto-animate/nuxt", //? Auto Animate
    "@vueuse/motion/nuxt", //? VueUse Motion
    "@nuxt/image", //? Nuxt Image
    "nuxt-icon", //? Nuxt Icons
    "@pinia/nuxt", //? Pinia
    "@formkit/auto-animate/nuxt", //? Auto-Animate
    "@nuxtjs/tailwindcss", //? TailwindCSS
  ],

  //& Global SCSS file & variables in all components
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/variables.scss";',
        },
      },
    },
  },

  //& SEO & Meta Tags
  app: {
    // keepalive: true, //? Keep-alive all routes
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "IncuisCreations - Marketing Agency",
      link: [{ rel: "icon", type: "image/png", href: "/logo.png" }],
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "IncuisCreations is high-end marketing agency providing a variety of services, located in Paris, France, with the option to work with clients online",
        },
        {
          name: "keywords",
          content:
            "pest control, pests, disinfection, marketing, retail placement, europe, global, dubai, uae, france, paris",
        },
        {
          name: "author",
          content: "bekford",
        },
      ],
    },
  },

  // & Runtime Config
  //& VueUse Motion
  runtimeConfig: {
    public: {
      motion: {
        directives: {
          //? Visible Once
          visibleOnceSlideBottom,
          visibleOnceSlideLeft,
          visibleOnceSlideRight,
          visibleOnceSlideTop,
          visibleOncePop,
          visibleOnceFadeIn,

          //? Visible
          visibleSlideBottom,
          visibleSlideLeft,
          visibleSlideRight,
          visibleSlideTop,
          visiblePop,
          visibleFadeIn,
          visibleOnceScaleRight,

          //? Motion
          slideBottom,
          slideLeft,
          slideRight,
          slideTop,
          enterPop,
          enterFadeIn,
        },
      },
    },
  },
});
