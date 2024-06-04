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
            "IncuisCreations is high-end marketing agency providing a variety of services, located in Paris, France, with the availability to work with clients globally to provide the best marketing solutions across different regions and countries to meet your business needs.",
        },
        {
          name: "keywords",
          content:
            "advertising agency, content creation, full marketing, digital marketing, social media management, video production, retail placement, brand development, middle east, europe, dubai",
        },
        {
          name: "author",
          content: "IncuisCreations",
        },
      ],
    },
  },

  // & Runtime Config
  //& VueUse Motion
  runtimeConfig: {
    public: {
      gtagId: "GTM-KZWH2SGQ",
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
