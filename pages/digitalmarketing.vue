<!--* Script -->
<script setup>
const services = {
  title: "services",

  list: [
    {
      title: "a. SEO (Search Engine Optimization)",
      details:
        "Elevate your online visibility and rankings with our SEO expertise. We optimize your digital presence to ensure your brand stands out in search engine results, driving organic traffic and engagement.",
    },
    {
      title: "b. Google Ads",
      details:
        "Maximize your online reach with targeted Google Ads campaigns. Our team creates strategic and impactful ad campaigns that resonate with your audience, driving traffic and conversions.",
    },
    {
      title: "c. Facebook Ads",
      details:
        "Leverage the power of social media with our Facebook Ads services. We craft visually appealing and engaging ads that reach your target audience on one of the largest social media platforms.",
    },
    {
      title: "d. Email Marketing",
      details:
        "Nurture your audience and drive conversions with our email marketing solutions. From compelling content to visually appealing designs, we create email campaigns that resonate with your audience.",
    },
    {
      title: "e. Content Scheduling",
      details:
        "Streamline your content distribution with our content scheduling services. We ensure that your content is strategically scheduled across various platforms, maximizing visibility and engagement.",
    },
    {
      title: "f. Audience Engagement",
      details:
        "Build and maintain meaningful connections with your audience through our audience engagement strategies. From social media interactions to community building, we ensure your brand stays connected.",
    },
  ],
};

const solutions = {
  title: "branding solutions",
  list: [
    {
      title: "a. Brand Identity Development",
      details:
        "Define and refine your brand identity with our expert services. We work collaboratively to create a unique and compelling brand identity that resonates with your target audience.",
    },
    {
      title: "b. Logo Design",
      details:
        "Make a lasting impression with a logo that speaks volumes. Our design team crafts logos that encapsulate your brand’s essence, leaving a memorable mark on your audience.",
    },
    {
      title: "c. Visual Branding",
      details:
        "Elevate your brand’s visual language with our visual branding services. From color palettes to typography, we ensure a cohesive and visually appealing brand presence across all touchpoints.",
    },
    {
      title: "d. Brand Strategy",
      details:
        "Develop a robust brand strategy that guides your brand’s journey. Our strategic approach considers market trends, competitor analysis, and consumer behavior to position your brand for success.",
    },
    {
      title: "e. Brand Messaging",
      details:
        "Craft compelling brand messages that resonate with your audience. Our team specializes in creating narratives that not only communicate your brand’s values but also engage and inspire.",
    },
    {
      title: "f. Brand Collateral",
      details:
        "From business cards to marketing materials, we design brand collateral that reflects your brand’s identity and leaves a lasting impression on your audience.",
    },
  ],
};
</script>

<!--* HTML -->
<template>
  <section class="marketing">
    <!-- *Page Header -->
    <AlbumHeader
      title="Digital Marketing Services"
      :description="[
        'Digital Marketing and Branding Excellence',
        'Unlock the full potential of your brand in the digital landscape with INCUIS Creations’ comprehensive digital marketing solutions. Our strategic approach blends creativity with data-driven precision, ensuring that your brand not only stands out but also achieves measurable success.',
      ]"
    />

    <!-- <div class="pageDetails">
      <h5 v-motion-slideBottom>Digital Marketing and Branding Excellence</h5>
      <h5 v-motion-slideBottom>
        Unlock the full potential of your brand in the digital landscape with
        INCUIS Creations’ comprehensive digital marketing solutions. Our
        strategic approach blends creativity with data-driven precision,
        ensuring that your brand not only stands out but also achieves
        measurable success.
      </h5>
    </div> -->

    <!-- *Services -->
    <ListServices :services="services" :list="services.list" />

    <!-- *Branding Solutions -->
    <ListServices :services="solutions" :list="solutions.list" />
  </section>
</template>

<!--* Styles -->
<style lang="scss">
.pageDetails {
  max-width: 80rem;
  margin-bottom: 8rem;

  h5 {
    &:nth-child(1) {
      margin-bottom: 2rem;
    }
  }
}

.marketing {
  header {
    background: url("/marketing.jpeg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}
</style>
