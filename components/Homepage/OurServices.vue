<!--* Script -->
<script setup>
const exampleImgs = [
  {
    project: "sospiro",
    img: 1,
  },
  {
    project: "migato",
    img: 6,
  },
  {
    project: "reinventedparfums",
    img: 1,
  },
  {
    project: "louisexincouture",
    img: 2,
  },
];
</script>

<!--* HTML -->
<template>
  <section class="our-services">
    <h2>
      we take care of your marketing so you can focus on your business, whether
      it be online or in a physical store.
    </h2>

    <!-- *Services Grid -->
    <div class="our-services-grid">
      <!-- *Services Left -->
      <div class="services-left">
        <h1>
          digital& <br />
          retail <br />marketing
        </h1>
        <p>
          "DESIGN IS EVERYWHERE. EVERYTHING FROM A FLOWER TO A MANHOLE MAY SERVE
          AS AN INSPIRATION. IN MY WORK I ALLOW EVERY TINY DETAIL OF MY
          SURROUNDINGS TO BE A VALUABLE ASPECT, WHICH MAY THEN BECOME AN
          ENHANCED IMAGE, AN ESSENTIAL PART OF MY ART."
        </p>

        <p>
          DIGITAL VISUALIZING IS A COMBINATION OF PLAYFUL USE OF COLORS AND
          INDIVIDUAL SHAPES WHICH IN THE END ARE BEING REASSEMBLED.
        </p>
      </div>

      <!-- *Services Middle -->
      <div class="services-middle">
        <NuxtImg
          width="650"
          class="img-cover"
          src="/portfolio/lesinconnus/1.webp"
          alt=""
        />
      </div>

      <!-- *Services Right -->
      <div class="services-right">
        <h3>
          Branding, content production, campaigns, lookbooks, line sheets,
          placement, events & more to meet your business needs.
        </h3>
      </div>
    </div>
  </section>
  <!-- *Image Examples -->
  <div class="image-examples-grid">
    <NuxtImg
      width="600"
      class="img-cover"
      v-for="img in exampleImgs"
      :src="`/portfolio/${img.project}/${img.img}.webp`"
      alt=""
    />
  </div>
</template>

<!--* Styles -->
<style lang="scss">
.our-services {
  h2 {
    text-transform: uppercase;
    text-align: center;
    max-width: 150rem;
    margin: 0 auto;
    margin-bottom: $spacing-xlg;
    margin-top: $spacing-xlg;
    font-family: $base-ff;
    letter-spacing: $letter-spacing-md;
  }
}

.our-services-grid {
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: $spacing-xlg;
  padding-bottom: 10vh;
}

.services-left {
  h1 {
    text-align: right;
    font-weight: 400;
    font-size: 8rem;
    text-transform: uppercase;
    margin-bottom: $spacing-lg;
  }

  p {
    margin-bottom: $spacing-md;
    line-height: 2;
  }
}

.services-middle {
  img {
    filter: contrast(1.1) grayscale(1);
  }
}

.services-right {
  display: grid;
  place-content: center;

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-md;
    font-family: $base-ff;
  }
}

.image-examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));
  gap: $spacing-md;
}

// *Media
@media (max-width: 800px) {
  .our-services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
