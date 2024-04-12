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
        <span>agency</span> creations <br />
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
      <div class="hero-box" v-for="sub in heroSubTitles">
        <h3>{{ sub.tag }}</h3>
        <h5>{{ sub.sub1 }}</h5>
        <h5>{{ sub.sub2 }}</h5>
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
    url("/homepage/hero.jpeg");

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
}

.hero-left {
  // background-color: red;

  h1 {
    text-transform: uppercase;
    line-height: 0.85;

    margin-bottom: $spacing-sm;
  }

  span {
    font-size: 6rem;

    font-weight: 500;
    color: $color-accent;
  }

  h2 {
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.5rem;

    // line-height: 1.5;
    transform: translateX(8%);
  }
}

.hero-right {
  h3 {
    text-transform: uppercase;
    margin-bottom: $spacing-sm;
    // background-color: red;
  }
}

.hero-box {
  h5 {
    padding-left: $spacing-md;
    text-transform: uppercase;
    font-weight: 300;
    font-family: $base-ff;
  }

  margin-bottom: $spacing-md;
}
// *Media
</style>
