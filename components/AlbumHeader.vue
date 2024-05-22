<!--* Script -->
<script setup>
defineProps(["album", "title", "description", "categories"]);
</script>

<!--* HTML -->
<template>
  <div class="px-2">
    <!-- *Title -->
    <h1
      v-motion-enterFadeIn
      class="text-9 min-[1000px]:text-[20rem] uppercase tracking-[1.5rem] max-[950px]:mb-3"
    >
      &#9654; {{ title }}
    </h1>

    <!-- *Description -->

    <div class="flex flex-col mb-[5vh]" v-motion-enterFadeIn>
      <p
        class="text-3.6 max-w-[120rem] mb-3 self-end"
        v-for="desc in description"
      >
        {{ desc }}
      </p>

      <p class="text-3.6 uppercase" v-for="cat in categories">
        {{ cat }}
      </p>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
