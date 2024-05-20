<!--* Script -->
<script setup>
defineProps([
  "title",
  "subtitle",
  "serviceOrder",
  "description",
  "image",
  "link",
]);
</script>

<!--* HTML -->
<template>
  <div
    class="grid grid-cols-3 mb-[10vh] gap-x-5g gap-y-2 max-[1200px]:grid-cols-1 mx-5"
  >
    <!-- *Left Side -->
    <h3 class="text-10 col-span-1 font-[500]">
      <span class="text-accent"> 0{{ serviceOrder }}</span>
      <span v-for="t in title" class="block uppercase">
        {{ t }}
      </span>
    </h3>

    <!-- *Right Side -->
    <div class="col-span-2">
      <div>
        <img
          class="rounded-1 mb-5 object-cover object-center w-full h-full"
          :src="`/homepage/hero.jpeg`"
          :alt="'test'"
        />
      </div>

      <h4 class="text-8 font-[600] text-accent">
        {{ subtitle }}
      </h4>
      <p class="text-3 mb-8">
        {{ description }}
      </p>

      <nuxt-link to="/">Learn More</nuxt-link>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
