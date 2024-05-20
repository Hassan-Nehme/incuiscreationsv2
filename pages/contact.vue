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

    <!-- *FAQ -->
    <Faq />
  </section>

  <!-- *Contact Form -->
  <div
    class="grid min-[1150px]:grid-cols-2 bg-dark pt-[10vh] px-[5vw] text-white"
  >
    <!-- *Form -->
    <div class="max-[1150px]:max-w-[100%]">
      <ContactForm />
    </div>

    <div class="flex items-center justify-center">
      <h2 class="text-10 lowercase">CONTACT INFO HERE</h2>
    </div>
  </div>
</template>

<!--* Styles -->
<style lang="scss"></style>
