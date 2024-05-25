<!--* Script -->
<script setup>
const services = [
  {
    title: "content creation",
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    image: "reinventedparfums",
    description:
      "We specialize in bringing brands to life through captivating visuals, compelling narratives, and immersive experiences. Our team of talented creatives works closely with you to understand your brand identity, values, and target audience. From there, we craft stunning campaigns, lookbooks, and line sheets that showcase your products in the best possible light.",
  },
  {
    title: "digital marketing",
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    image: "dior",
    description:
      "In today's digital age, having a strong online presence is crucial. We offer comprehensive digital marketing services, including SEO, social media management, and influencer marketing. We'll help you increase your brand visibility, drive traffic to your website, and ultimately boost sales.",
  },
  {
    title: "retail placement",
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    image: "kanasport",
    description:
      "Whether you're looking to expand into new markets in Europe, Asia, or the Middle East, or if you want to explore opportunities for pop-up stores, we'll be there every step of the way. Our extensive network and industry expertise mean that we can help you find the perfect placement for your brand, ensuring maximum exposure and success.",
  },
  {
    title: "full-service marketing",
    subtitle: "WE LOVE ALL THINGS VIDEO!",
    image: "migato",
    description:
      "From 0 to 100, we handle all aspects of marketing. This includes branding, content production, campaigns, lookbooks, line sheets, retail placement, and events. We help you sell your products by providing a comprehensive suite of services tailored to meet your unique needs.",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="bg-dark">
    <h2
      class="text-center text-white mb-[5vh] text-5 uppercase"
      v-motion-visibleOnceFadeIn
    >
      Our Services
    </h2>

    <div
      class="grid grid-cols-4 gap-3 max-[1300px]:grid-cols-2 max-[850px]:grid-cols-1"
    >
      <Service
        v-for="(service, index) in services"
        :title="service.title"
        :description="service.description"
        :image="service.image"
        :index="index"
      />
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss"></style>
