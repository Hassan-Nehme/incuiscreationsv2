<!--* Script -->
<script setup>
const services = {
  title: "services",

  list: [
    {
      title: "a. Print Production:",
      details:
        "Brochures, posters, banners, and tangible collateral crafted with precision.",
    },
    {
      title: "b. TV Commercial Production:",
      details:
        "Scriptwriting, casting, filming, editing, and post-production for captivating television ads.",
    },
    {
      title: "c. Radio Commercial Production",
      details:
        "Complete radio ad creation, from scriptwriting to voiceover recording and editing.",
    },
    {
      title: "d. Video Production:",
      details:
        "Diverse video content for online platforms, social media, and dynamic presentations.",
    },
    {
      title: "e. Photography",
      details:
        "Expertly organized photoshoots for product photography, brand imagery, and impactful campaigns.",
    },
    {
      title: "f. Animation and Motion Graphics:",
      details:
        "Digital magic for online ads, social media content, and interactive presentation.",
    },
    {
      title: "g. Digital Content Production:",
      details:
        "Multimedia excellence for online platforms, including website banners, interactive content, and video ads.",
    },
    {
      title: "h. Copywriting:",
      details:
        "Crafting compelling and persuasive text across various mediums to elevate your brand message.",
    },
    {
      title: "i. Graphic Design:",
      details:
        "Creating visually stunning and effective advertising materials for digital and print.",
    },
    {
      title: "j. Packaging Design:",
      details:
        "Strategic design to align product packaging with your brand image and key messages.",
    },
    {
      title: "k. Post-Production Services:",
      details:
        "Editing and enhancing content to meet the highest standards, ensuring it aligns with your creative vision.",
    },
    {
      title: "l. Lookbooks",
      details:
        "Coordination of photoshoots for captivating images that enhance your brand’s visual narrative.",
    },
    {
      title: "m. Linesheets",
      details:
        "Concise documents aligning product details with brand image and key messages for effective communication.",
    },
    {
      title: "n. Editorials",
      details:
        "Editorial content creation, from storytelling and photoshoot coordination to creative direction and optimized presentation on various platforms.",
    },
    {
      title: "o. Art Direction",
      details:
        "Art direction shapes visual narratives through creative guidance in design, film, and advertising.",
    },
    {
      title: "p. Creative Direction",
      details:
        "Creative direction guides the artistic vision to achieve impactful outcomes.",
    },
  ],
};
</script>

<!--* HTML -->
<template>
  <section class="production">
    <!-- *Page Header -->
    <!-- <PageHeader :title="['production', 'services']" /> -->

    <div class="pageDetails">
      <h5 v-motion-slideBottom>
        At Incuis Creations, we’re your creative partners, bringing your brand
        to life through a spectrum of production services tailored to your
        unique vision.
      </h5>
    </div>

    <!-- *Services -->
    <ListServices :services="services" :list="services.list" />
  </section>

  <!-- <div class="productionOffers">
    <div class="productionOffersText" v-motion-visibleOnceSlideBottom>
      <h5>We Create, Produce, and Post-Produce:</h5>
      <h5>
        Experience the full spectrum of visual storytelling with our end-to-end
        production services at INCUIS Creations. From ideation to execution, we
        bring your vision to life with creativity and precision.
      </h5>

      <h5>
        Ready to elevate your brand’s visual storytelling? Explore our diverse
        portfolio and witness firsthand the impact of our comprehensive
        production services. Your brand’s creative journey starts here.
      </h5>

      <nuxt-link to="/portfolio" class="btn btnProduction btnHoverTranslate"
        >Explore Our Portfolio</nuxt-link
      >
    </div>
  </div> -->
</template>

<!--* Styles -->
<style lang="scss">
.productionOffers {
  background: url("/production2.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5rem 15vw;

  div {
    max-width: 80rem;
    color: $color-text-light;

    h5 {
      margin-bottom: 4rem;
    }
  }
}

.pageDetails {
  overflow: hidden;
}
</style>
