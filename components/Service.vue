<!--* Script -->

<script setup>
defineProps(["title", "description", "index"]);
</script>

<!--* HTML -->
<template>
  <div class="bg-white text-black rounded-1">
    <div>
      <p
        class="border-b-[2px] border-black border-dashed text-center text-5 py-3"
      >
        № 0{{ index + 1 }}
      </p>

      <div class="flex flex-col justify-between min-h-[110rem] px-2">
        <!-- *Text -->
        <div class="text-center">
          <h3 class="text-5 uppercase mb-3 mt-2">{{ title }}</h3>
          <p>
            {{ description }}
          </p>
        </div>

        <!-- *IMG -->
        <div>
          <img
            class="w-full h-full object-cover object-top max-h-[40rem] mb-1 rounded-1"
            src="/portfolio/lesinconnus/1.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
