<!--* Script -->

<script setup>
defineProps(["title", "description", "index", "image"]);
</script>

<!--* HTML -->
<template>
  <div class="bg-white text-black rounded-1 max-w-[80rem] mx-auto">
    <div>
      <p
        class="border-b-[2px] border-black border-dashed text-center text-[4.5rem] py-3"
      >
        № 0{{ index + 1 }}
      </p>

      <div class="flex flex-col justify-between min-h-[110rem] px-2">
        <!-- *Text -->
        <div class="text-center">
          <h3 class="text-4 uppercase mb-3 mt-2">{{ title }}</h3>
          <p>
            {{ description }}
          </p>
        </div>

        <!-- *IMG -->
        <div>
          <NuxtImg
            width="750"
            loading="lazy"
            class="w-full h-[60rem] object-cover object-top min-[1300px]:max-h-[40rem] mb-1 rounded-1"
            :src="`/portfolio/coverphotos/${image}.webp`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
