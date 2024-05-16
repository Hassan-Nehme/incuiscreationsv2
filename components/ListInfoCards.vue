<!--* Script -->
<script setup>
defineProps(["values"]);
</script>

<!--* HTML -->
<template>
  <!-- *Values Grid -->
  <div class="facility-value-grid">
    <div class="value" v-for="v in values">
      <h3>&mdash; {{ v.title }}</h3>

      <p>{{ v.text }}</p>

      <ul v-if="v.list">
        <li v-for="l in v.list">{{ l }}</li>
      </ul>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.facility-value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));
  grid-template-columns: repeat(2, 1fr);
  gap: $spacing-md;
  margin-bottom: $spacing-lg;

  @media (max-width: 1450px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
}

.value {
  background: $color-background-dark;
  color: $color-text-light;
  padding: 5rem;
  border-radius: 2rem;
  filter: drop-shadow(0 3px 8px black);

  h3 {
    text-transform: uppercase;
    // border-bottom: 3px solid $color-accent;
    font-size: 3.6rem;
    margin-bottom: $spacing-md;
  }

  hr {
    margin-bottom: $spacing-md;
  }

  ul {
    padding: 4rem;
  }

  li {
    list-style-type: disc;
    margin-bottom: $spacing-md;
    font-size: 2.6rem;

    &::marker {
      color: $color-accent;
    }
  }

  p {
    line-height: 2;
    font-size: 2.6rem;
  }
}
</style>
