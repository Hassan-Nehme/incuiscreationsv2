<!-- *Script -->
<script setup>
const lastWorks = [
  {
    name: "sospiro",
    title: "SOSPIRO",
    text: "AD Campaign Video & Pictures",
  },
  {
    name: "veralab",
    title: "Vera Lab",
    text: "Brand Video",
  },
  {
    name: "kanasport",
    title: "Kana Sport",
    text: "Social Media Reel",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="last-works">
    <h2>&mdash; Last works</h2>

    <div class="last-works-grid">
      <nuxt-link
        to="/"
        aria-label="redirects to album page"
        v-for="work in lastWorks"
        rel="nofollow"
        class="last-work"
      >
        <!-- :to="{ path: `/portfolio/${work.name}` }" -->
        <div class="workOverlay">
          <p>{{ work.text }}</p>
          <h3>{{ work.title }}</h3>
        </div>

        <img
          :src="`/portfolio/coverphotos/${work.name}.webp`"
          alt="cover photos of recent projects done by incuis creations"
        />
      </nuxt-link>
    </div>

    <nuxt-link to="/" aria-label="goes to portfolio page">
      <h5><span>&mdash;</span> view all campaigns</h5>
    </nuxt-link>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.last-works {
  h2 {
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    font-size: 4rem;
  }

  h5 {
    text-align: center;
  }
}

.last-works-grid {
  max-width: 150rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-top: 5rem;
  display: grid;
  grid-template-areas:
    "topGrid topGrid"
    "lowLeft lowRight";
}

.last-work {
  position: relative;
  &:nth-child(1) {
    grid-area: topGrid;

    h3 {
      font-size: 10rem;
    }
  }
  &:nth-child(2) {
    grid-area: lowLeft;
  }
  &:nth-child(3) {
    grid-area: lowRight;
  }

  img {
    width: 100%;
    height: 100%;
    min-height: 40rem;

    aspect-ratio: 3/1;
    object-fit: cover;
    object-position: center;

    filter: contrast(1.2) brightness(0.85);
  }
}

.workOverlay {
  position: absolute;
  top: 30%;
  z-index: 1;
  // background-color: red;
  color: white;

  padding: 5rem;

  h3 {
    font-size: 6rem;
    font-weight: 500;
  }
  p {
    font-weight: 400;
  }
}
//* MEDIA
@media (max-width: 1150px) {
  .last-works-grid {
    grid-template-areas:
      "topGrid"
      "lowLeft"
      "lowRight";
  }

  a {
    h3 {
      font-size: 7rem !important;
    }
  }
}

@media (max-width: 450px) {
  .last-works-grid {
    img {
      max-height: 20rem;
    }
  }
}
</style>
