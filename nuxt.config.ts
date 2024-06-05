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
      title:
        "Incuis Creations - Marketing & Production Agency in Paris, France",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.png",
        },
        {
          rel: "canonical",
          href: "https://incuiscreations.com",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
          content:
            "Incuis Creations is high-end marketing agency providing a variety of services, located in Paris, France, with the availability to work with clients globally to provide the best marketing solutions across different regions & countries to meet your business needs. Advertising, full-marketing, retail placement, digital marketing, social media management, video production, content creation, brand development, and more.",
        },
        {
          name: "keywords",
          content:
            "advertising agency, content creation, full marketing, digital marketing, social media management, video production, retail placement, brand development, middle east, europe, france, dubai",
        },
        {
          name: "author",
          content: "Incuis Creations",
        },
      ],
    },
  },

  // & Runtime Config
  //& VueUse Motion
  runtimeConfig: {
    public: {
      gtagId: "G-TRX2PLM8ZJ",
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
