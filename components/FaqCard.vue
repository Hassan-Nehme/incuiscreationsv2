<!--* Script -->
<script setup>
defineProps(["showAnswer", "question", "answer"]);
</script>

<!--* HTML -->
<template>
  <div
    class="faq-card mx-auto mb-2 cursor-pointer w-full border-b-[1.5px] border-black p-2"
    @click="showAnswer = !showAnswer"
    v-auto-animate
  >
    <h3
      class="text-[3.2rem] font-[600] flex justify-between hover:text-accent transition-all duration-500 ease-in-out"
    >
      {{ question }}
      <span class="ml-2 text-accent font-[600]">&plus;</span>
    </h3>
    <p v-if="showAnswer" class="text-3 p-3 w-full mb-2">{{ answer }}</p>
  </div>
</template>

<!--* Styles -->
<style lang="scss">
.faq-card {
  // border: 0.2rem solid $color-background-light;
  // padding: 1rem 2rem;
  // border-radius: 1rem;
  // cursor: pointer;

  // max-width: 125rem;
  // margin: 0 auto;
  // transition: 0.5s ease-in-out;
  // margin-bottom: $spacing-md;

  h3 {
    // font-size: 3rem;
    // display: flex;
    // justify-content: space-between;
    // padding: 1rem;
    // transition: 0.25s ease-in-out;
    // font-weight: 500;

    span {
      margin-left: 2rem;
      color: $color-accent;
      font-weight: 600;
      transition: 0.5s ease-in-out;
    }

    &:hover {
      background-color: lighten($color-accent, 50%);
    }
  }

  p {
    padding: $spacing-md;

    width: 100%;
  }
}

.rotate-span {
  rotate: 90deg;
  color: red !important;
}
</style>
