<!--* Script -->
<script setup>
const heroSubTitles = [
  {
    tag: "01",
    sub1: "art direction",
    sub2: "brand design",
  },

  {
    tag: "02",
    sub1: "digital marketing",
    sub2: "retail marketing",
  },

  {
    tag: "03",
    sub1: "production",
    sub2: "photography",
  },

  {
    tag: "04",
    sub1: "graphic design",
    sub2: "development",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="hero-section">
    <div class="hero-main-text">
      <!-- *Left Hero -->
      <div class="hero-left">
        <h1>
          incuis <br />
          <span>studio</span> creations <br />
          <span>creative art direction & design</span>
        </h1>

        <h2>
          we love <br />
          design <br />
          style& <br />
          art <br />
          &sun
        </h2>
      </div>

      <!-- *Right Hero -->
      <div class="hero-right">
        <h3 v-for="subtitle in heroSubTitles">
          <span>{{ subtitle.tag }}</span> <br />
          {{ subtitle.sub1 }} <br />
          {{ subtitle.sub2 }}
        </h3>
      </div>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.hero-section {
  min-height: 100dvh;
  padding-top: 10vh;
  color: $color-text-light;
  overflow: hidden;

  // & Background
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url("/homepage/herobg.jpeg");

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  display: grid;
  align-items: center;
}

.hero-main-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hero-left {
  //   background-color: red;
  display: grid;
  justify-content: center;
  line-height: 1;
  h1 {
    text-transform: uppercase;
    margin-bottom: $spacing-lg;
  }

  span {
    font-size: 4rem;
    font-weight: 500;
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    line-height: 1.5;
    transform: translateX(6%);
  }
}

.hero-right {
  //   background-color: red;
  //   text-align: center;
  display: grid;
  justify-content: end;

  h3 {
    text-transform: uppercase;
    margin-bottom: $spacing-sm;

    &:nth-child(1) {
      transform: translateX(-60%);
    }
    &:nth-child(2) {
      transform: translateX(-40%);
    }
    &:nth-child(3) {
      transform: translateX(-20%);
    }
  }

  span {
    text-decoration: underline solid 0.2rem;
    font-weight: 600;
    letter-spacing: 0.25rem;
    // background-color: red;
    transform: translateX(-100%);
    display: inline-block;
  }
}

// *Media
@media (max-width: 1100px) {
  .hero-main-text {
    grid-template-columns: 1fr;
  }

  .hero-left {
    justify-content: start;

    h1 {
      font-size: 8rem;
    }
  }

  .hero-right {
    h3 {
      transform: translateX(0) !important;
    }
  }
}
</style>
