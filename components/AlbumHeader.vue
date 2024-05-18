<!--* Script -->
<script setup>
defineProps(["album"]);
</script>

<!--* HTML -->
<template>
  <div class="px-2">
    <!-- *Title -->
    <h1 class="min-[1000px]:text-[20rem] uppercase tracking-[1.5rem]">
      {{ album.title }}
    </h1>

    <!-- *Description -->

    <div class="flex flex-col mb-[5vh]">
      <p
        class="text-[3rem] max-w-[125rem] mb-3 self-end"
        v-for="desc in album.description"
      >
        {{ desc }}
      </p>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
