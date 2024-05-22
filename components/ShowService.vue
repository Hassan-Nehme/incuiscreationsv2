<!--* Script -->
<script setup>
defineProps(["title", "details", "index"]);
const showDetails = ref(false);
</script>

<!--* HTML -->
<template>
  <div v-auto-animate class="mb-5">
    <!-- *Title -->
    <p
      class="inline-block text-[3.2rem] font-[600] cursor-pointer hover:text-accent transition-all duration-700 ease-in-out"
      @click="showDetails = !showDetails"
    >
      <span v-if="index < 9" class="font-[500]">0</span
      ><span class="font-[500]">{{ index + 1 }}</span> {{ title }}
    </p>

    <!-- *Details -->
    <p class="text-[2.8rem] mb-5 mt-1" v-if="showDetails">{{ details }}</p>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
