<!--* Script -->
<script setup>
useHead({
  title: "Contact US - IncuisCreations Marketing",
});
</script>

<!--* HTML -->
<template>
  <section>
    <!-- *Page Header -->
    <AlbumHeader
      title="Get in touch"
      :description="[
        'Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.',
      ]"
    />

    <!-- *FAQ -->
    <!-- <Faq /> -->
  </section>

  <!-- *Contact Form -->
  <div
    class="grid min-[1201px]:grid-cols-2 bg-dark pt-[10vh] px-[5vw] text-white"
  >
    <!-- *Form -->
    <div class="max-[1200px]:max-w-[100%]">
      <ContactForm />
    </div>

    <div class="flex items-center justify-center max-[1200px]:hidden">
      <p class="text-6 lowercase">info@incuiscreations.com</p>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
