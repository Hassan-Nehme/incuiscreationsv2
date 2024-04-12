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
    <h2>Frequently Asked Questions</h2>

    <FaqCard
      v-for="question in questions"
      :question="question.q"
      :answer="question.a"
      :showAnswer="showAnswer"
    />
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.faq {
  h2 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: $spacing-md;
  }
}
</style>
