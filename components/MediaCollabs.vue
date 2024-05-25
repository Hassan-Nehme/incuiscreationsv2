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
  <section
    class="bg-dark text-white grid min-[1200px]:grid-cols-2 gap-3 pb-[5vh] pt-[5vh] overflow-hidden"
  >
    <!-- *Media Text -->
    <div
      class="max-[1200px]:mb-5 grid place-content-center"
      v-motion-visibleOnceSlideLeft
    >
      <h3 class="text-6 mb-3 font-[600] uppercase">Media Collaborations</h3>

      <p class="mb-5 text-3">
        We are proud to collaborate with esteemed magazines to amplify your
        brand's reach and visibility. Our strategic partnerships enable us to
        feature your content in reputable publications, ensuring a wider
        audience and increased credibility.
      </p>

      <!-- <p class="mb-5 text-3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, est
        aliquid fugiat molestias facilis cum nostrum ducimus, porro sequi nihil
        necessitatibus perferendis dolor officiis ut ullam minus doloremque
        nobis suscipit?
      </p> -->

      <nuxt-link
        to="/contact"
        class="bg-white px-4 py-1 inline-block max-w-max rounded-4 font-[600]"
        >Get in touch</nuxt-link
      >
    </div>

    <!-- *Media Logos -->

    <div class="grid grid-cols-3 gap-x-3 gap-y-6">
      <NuxtImg
        class="w-full h-full object-contain max-w-[32rem] mx-auto"
        v-motion-visibleOnceSlideBottom
        format="webp"
        :src="`/mediacollabs/${index}.png`"
        alt="logos of brands that we collaberated with"
        v-for="index in 8"
      />
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss"></style>
