<!--* Script -->
<script setup>
const { error } = defineProps(["toastText", "error"]);

const toastClose = ref(false);

setTimeout(() => {
  if (error) {
    toastClose.value = false;
  } else {
    toastClose.value = true;
  }
}, 4000);
</script>

<!--* HTML -->
<template>
  <div class="toast-wrapper" v-if="!toastClose" v-motion-slideTop>
    <div class="toast" :class="{ success: !error, failed: error }">
      <p>{{ toastText }}</p>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss">
.toast-wrapper {
  position: fixed;
  width: 100%;
  top: 20px;
  z-index: 10;
  margin: 0 auto;
  opacity: 0.75;
}
.toast {
  text-align: center;
  padding: 20px;
  color: white;

  border-radius: 10px;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.2);
  max-width: 50rem;
  margin: 0 auto;

  p {
    font-size: 2.4rem;
  }
}

.failed {
  background: #ff0062;
}

.success {
  background: green;
}
</style>
