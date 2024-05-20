<!--* Script -->
<script setup>
const services = [
  {
    title: ["content", "creation"],
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    description:
      "We specialize in bringing brands to life through captivating visuals, compelling narratives, and immersive experiences. Our team of talented creatives works closely with you to understand your brand identity, values, and target audience. From there, we craft stunning campaigns, lookbooks, and line sheets that showcase your products in the best possible light.",
  },
  {
    title: ["digital", "marketing"],
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    description:
      "In today's digital age, having a strong online presence is crucial. We offer comprehensive digital marketing services, including SEO, social media management, and influencer marketing. We'll help you increase your brand visibility, drive traffic to your website, and ultimately boost sales.",
  },
  {
    title: ["retail", "placement"],
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    description:
      "Whether you're looking to expand into new markets in Europe, Asia, or the Middle East, or if you want to explore opportunities for pop-up stores, we'll be there every step of the way. Our extensive network and industry expertise mean that we can help you find the perfect placement for your brand, ensuring maximum exposure and success.",
  },
  {
    title: ["full-service", "marketing"],
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    description:
      "From 0 to 100, we handle all aspects of marketing. This includes branding, content production, campaigns, lookbooks, line sheets, retail placement, and events. We help you sell your products by providing a comprehensive suite of services tailored to meet your unique needs.",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="bg-dark text-white">
    <!-- *Title -->
    <h2
      class="max-[1200px]:text-10 max-[550px]:text-8 text-12 font-[700] text-center my-[15vh]"
    >
      WE <span class="text-accent">TRANSFORM</span> IDEAS INTO UNIQUE STORIES &
      <span class="text-accent">DESIGNS</span>, TO CONNECT YOUR
      <span class="text-accent">BRAND</span> WITH ITS
      <span class="text-accent">AUDIENCE</span>.
    </h2>

    <!-- *Services -->
    <Service
      v-for="(service, index) in services"
      :title="service.title"
      :serviceOrder="index + 1"
      :subtitle="service.subtitle"
      :description="service.description"
    />
  </section>
</template>

<!--* Styles -->
<style lang="scss"></style>
