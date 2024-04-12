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
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.hero-section {
  min-height: 100dvh;
  padding-top: 10vh;
  color: $color-text-light;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: $spacing-xlg;

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
}

.hero-left {
  // background-color: red;

  h1 {
    text-transform: uppercase;
    line-height: 0.85;
  }

  span {
    font-size: 4rem;
    font-weight: 500;
    color: $color-accent;
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    // line-height: 1.5;
    // transform: translateX(6%);
  }
}

.hero-right {
  h3 {
    text-transform: uppercase;
    margin-bottom: $spacing-sm;
  }

  span {
    // text-decoration: underline solid 0.2rem;
    font-weight: 400;
    letter-spacing: 0.25rem;
    color: $color-accent;
    // transform: translateX(-100%);
    display: inline-block;
    font-size: 4.5rem;
  }
}

// *Media
</style>
