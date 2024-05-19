<!--* Script -->
<script setup>
defineProps(["title", "subtitle", "description", "list"]);
</script>

<!--* HTML -->
<template>
  <!-- *Info Card-->
  <div class="bg-dark text-white p-5 rounded-[2rem]">
    <div class="mb-5">
      <p class="uppercase text-3.6 font-semibold">&mdash; {{ title }}</p>

      <p class="font-medium text-3">{{ subtitle }}</p>
    </div>

    <p class="text-[2.6rem] leading-loose">{{ description }}</p>

    <ul class="p-4" v-if="list">
      <li class="text-[2.6rem] mb-3 list-disc marker:accent" v-for="l in list">
        {{ l }}
      </li>
    </ul>
  </div>
</template>
