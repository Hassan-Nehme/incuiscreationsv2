<!--* Script -->
<script setup>
const recentWorks = [
  {
    name: "sospiro",
    title: "sospiro",
  },

  {
    name: "veralab",
    title: "vera lab",
  },
  {
    name: "kanasport",
    title: "kana sport",
  },
];
</script>

<!--* HTML -->
<template>
  <section
    class="recent-works"
    :style="{
      background: `linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ), url('/portfolio/coverphotos/sospiro.webp')`,
    }"
    style="
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    "
  >
    <h2>&mdash; Recent Works</h2>

    <!-- *Recent Works Background -->
    <div class="recent-works-bg">
      <!-- *Recent Works Grid -->
      <div class="recent-works-grid">
        <img
          v-for="project in recentWorks"
          :src="`/portfolio/coverphotos/${project.name}.webp`"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.recent-works {
  min-height: 100vh;
  padding: 5rem 0;
  transition: 3s ease-in-out;
  h2 {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin-bottom: $spacing-md;
  }
}

.recent-works-bg {
  background-color: red;
}

.recent-works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(40rem, 100%), 1fr));
  gap: 2rem;
}

.recent-work {
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    aspect-ratio: 1/ 1.2;
    filter: brightness(0.85) contrast(1.2);
  }
}
</style>
