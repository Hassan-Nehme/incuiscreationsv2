<!--* Script -->
<script setup>
defineProps(["title", "subtitle", "description", "list", "color"]);
</script>

<!--* HTML -->
<template>
  <!-- *Info Card-->
  <div
    class="bg-dark text-white p-5 rounded-[2rem]"
    :class="{ 'bg-white text-dark ': color === 'light' }"
  >
    <!-- & Titles -->
    <div class="mb-5">
      <p class="uppercase text-3.6 font-semibold">&mdash; {{ title }}</p>
      <p class="font-medium text-3">{{ subtitle }}</p>
    </div>

    <!-- & Description -->
    <p class="text-[2.6rem] leading-loose">{{ description }}</p>

    <!-- & List -->
    <ul class="p-4" v-if="list">
      <li class="text-[2.6rem] mb-3 list-disc marker:accent" v-for="l in list">
        {{ l }}
      </li>
    </ul>
  </div>
</template>
