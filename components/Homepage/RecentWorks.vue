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
  <section class="recent-works">
    <h2>&mdash; Recent Works</h2>

    <!-- *Recent Works Grid -->
    <div class="recent-works-grid">
      <nuxt-link to="/" v-for="project in recentWorks" class="recent-work">
        <img :src="`/portfolio/coverphotos/${project.name}.webp`" alt="" />
      </nuxt-link>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.recent-works {
  padding: 5rem 0;
  h2 {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin-bottom: $spacing-md;
  }
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
    aspect-ratio: 1/ 1.3;
    filter: brightness(0.85) contrast(1.2);
  }
}
</style>
