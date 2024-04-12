<!--* Script -->
<script setup>
defineProps(["showAnswer", "question", "answer"]);
</script>

<!--* HTML -->
<template>
  <div class="faq-card" @click="showAnswer = !showAnswer" v-auto-animate>
    <h5>{{ question }} <span>&plus;</span></h5>
    <p v-if="showAnswer">{{ answer }}</p>
  </div>
</template>

<!--* Styles -->
<style lang="scss">
.faq-card {
  border: 0.2rem solid black;
  padding: 1rem 2rem;
  border-radius: 1rem;
  cursor: pointer;

  max-width: 100rem;
  margin: 0 auto;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: lighten(black, 80%);
  }

  h5 {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    span {
      margin-left: 2rem;
    }
  }

  p {
    padding: $spacing-md 0;
  }
}
</style>
