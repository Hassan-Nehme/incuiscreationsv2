<!--* Script -->
<script setup>
defineProps(["services", "list"]);
</script>

<!--* HTML -->
<template>
  <div class="list mt-5">
    <h3 class="mb-1 uppercase text-5">&mdash; {{ services.title }}</h3>

    <div class="services-grid">
      <div class="service" v-for="service in list">
        <h4 v-motion-visibleOnceFadeIn class="text-accent">
          {{ service.title }}
          <!-- <Icon
            name="material-symbols:print-outline"
            color="black"
            size="3rem"
          /> -->
        </h4>
        <p v-motion-visibleOnceSlideBottom>
          {{ service.details }}
        </p>
      </div>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.list {
  margin-bottom: 3rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));

  gap: 3rem;
  overflow: hidden;
}

.service {
  padding: 2rem;

  h4 {
    font-weight: 600;
  }

  p {
    font-size: 2.8rem;
  }
}
</style>
