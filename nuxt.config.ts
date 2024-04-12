// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //& Modules
  modules: [
    // "@formkit/auto-animate/nuxt", //? Auto Animate
    // "@vueuse/motion/nuxt", //? VueUse Motion
    "@nuxt/image", //? Nuxt Image
    "nuxt-icon", //? Nuxt Icons
    "@pinia/nuxt", //? Pinia
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
      ],
    },
  },
});