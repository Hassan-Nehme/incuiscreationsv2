<!--* Script -->
<script setup>
const heroSubTitles = [
  {
    tag: "01",
    sub1: "VIDEO PRODUCTION",
    sub2: "PHOTOGRAPHY",
  },

  {
    tag: "02",
    sub1: "digital marketing",
    sub2: "web development",
  },

  {
    tag: "03",
    sub1: "GRAPHIC DESIGN ",
    sub2: "animation",
  },

  {
    tag: "04",
    sub1: "branding",
    sub2: "RETAIL PLACEMENT",
    sub3: "RETAIL PLACEMENT",
    sub4: "RETAIL PLACEMENT",
  },
  {
    tag: "05",
    sub1: "POP UPS",
    sub2: "EVENTS",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="hero">
    <!-- *Left Hero -->
    <div class="hero-left">
      <h1>
        incuis <br />
        <span>agency</span> creations <br />
        <span> Full-Service Marketing</span>
      </h1>

      <h2>
        we love <br />
        crafting stories <br />
        standing out <br />
        ART & SUN & STRAWBERRIES <br />
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
.hero {
  min-height: 100svh;
  padding-top: 10vh;
  color: $color-text-light;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  gap: $spacing-xlg;

  // & Background
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0.075) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    url("/homepage/hero2.jpeg");

  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;

  @media (max-width: 900px) {
    background-attachment: scroll;
  }
}

.hero-left {
  // background-color: red;

  h1 {
    text-transform: uppercase;
    line-height: 0.9;

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
    color: $color-accent;
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
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    padding-top: 15vh;
  }

  .hero-right {
    margin: 0 0 0 auto;
  }
}

@media (max-width: 500px) {
  .hero-left {
    h1 {
      font-size: 10rem;
      padding: 1rem;
    }
  }
}
</style>
