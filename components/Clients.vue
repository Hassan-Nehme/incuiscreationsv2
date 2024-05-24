<!--* Script -->
<script setup>
// const test = 9;

// const range = (start, end) => {
//   return Array(end - start + 1)
//     .fill()
//     .map((val, i) => start + i);
// };
</script>

<!--* HTML -->
<template>
  <section class="clients">
    <div class="ourClients">
      <h4>&mdash; Our Clients</h4>

      <!-- *Clients -->
      <div class="clientsGrid">
        <!-- *PNG -->
        <NuxtImg
          v-motion-visibleOnceSlideBottom
          width="150"
          format="webp"
          :src="`/ourclients/${index}.png`"
          alt="logos of brands that we worked with, they are our clients"
          v-for="index in 9"
        />
      </div>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.clients {
  background-color: $color-background-dark;
  color: $color-text-light;
  h4 {
    margin-bottom: 5rem;
    font-weight: 500;
  }
}

.clientsGrid {
  // background-color: blue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(10rem, 100%), 1fr));
  gap: 6rem 3rem;
  margin-bottom: 8rem;

  img {
    margin: 0 auto;
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 11rem;
    max-width: 20rem;
  }
}
</style>
