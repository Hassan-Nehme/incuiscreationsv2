<!--* Script -->
<script setup>
// const test = 9;

// const range = (start, end) => {
//   return Array(end - start + 1)
//     .fill()
//     .map((val, i) => start + i);
// };

defineProps(["color"]);
</script>

<!--* HTML -->
<template>
  <section
    class="bg-dark text-white grid min-[1200px]:grid-cols-2 gap-y-3 pb-[5vh] pt-[5vh]"
  >
    <!-- *Media Text -->
    <div class="max-[1200px]:mb-5">
      <h3 class="text-6 mb-3">
        We design <br />delightful digital <br />
        experiences.
      </h3>

      <p class="mb-2 text-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        nesciunt neque fugiat similique, blanditiis minima suscipit est
        doloribus modi repudiandae?
      </p>

      <p class="mb-5 text-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, est
        aliquid fugiat molestias facilis cum nostrum ducimus, porro sequi nihil
        necessitatibus perferendis dolor officiis ut ullam minus doloremque
        nobis suscipit?
      </p>

      <nuxt-link
        to="/contact"
        class="bg-white px-4 py-1 inline-block rounded-4 font-medium"
        >Get in touch</nuxt-link
      >
    </div>

    <!-- *Media Logos -->
    <div class="mediaCollabs grid">
      <div class="clientsGrid grid grid-cols-3 gap-x-3 gap-y-6">
        <NuxtImg
          class="w-full h-full mx-auto object-contain max-w-[30rem]"
          v-motion-visibleOnceSlideBottom
          format="webp"
          :src="`/mediacollabs/${index}.png`"
          alt="logos of brands that we collaberated with"
          v-for="index in 8"
        />
      </div>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss"></style>
