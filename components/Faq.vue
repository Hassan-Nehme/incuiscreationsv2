<!--* Script -->
<script setup>
const questions = [
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
  {
    q: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt possimus est quibusdam sit alias vel provident odit tempora quae, impedit cupiditate voluptatum suscipit reiciendis aliquam.",
  },
];

const showAnswer = ref(false);
</script>

<!--* HTML -->
<template>
  <section class="faq">
    <!-- <h2
      v-motion-visibleOnceFadeIn
      class="text-center uppercase font-[600] mb-5"
    >
      Frequently Asked Questions
    </h2> -->

    <FaqCard
      v-motion-visibleOnceSlideLeft
      v-for="question in questions"
      :question="question.q"
      :answer="question.a"
      :showAnswer="showAnswer"
    />
  </section>
</template>

<!--* Styles -->
<style lang="scss"></style>
