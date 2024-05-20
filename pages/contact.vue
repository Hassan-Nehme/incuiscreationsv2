<!--* Script -->
<script setup></script>

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
  </section>

  <!-- *Contact Form -->
  <div class="grid grid-cols-2 bg-dark pt-[10vh] px-[5vw]">
    <ContactForm />
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
