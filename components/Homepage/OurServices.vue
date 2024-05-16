<!--* Script -->
<script setup>
const exampleImgs = [
  {
    project: "sospiro",
    img: 1,
  },
  {
    project: "migato",
    img: 6,
  },
  {
    project: "reinventedparfums",
    img: 1,
  },
  {
    project: "louisexincouture",
    img: 2,
  },
];

const services = [
  {
    title: "content creation",
    text: "We specialize in bringing brands to life through captivating visuals, compelling narratives, and immersive experiences. Our team of talented creatives works closely with you to understand your brand identity, values, and target audience. From there, we craft stunning campaigns, lookbooks, and line sheets that showcase your products in the best possible light.",
  },
  {
    title: "Digital Marketing",
    text: "In today's digital age, having a strong online presence is crucial. We offer comprehensive digital marketing services, including SEO, social media management, and influencer marketing. We'll help you increase your brand visibility, drive traffic to your website, and ultimately boost sales.",
  },
  {
    title: "Retail Placement",
    text: "Whether you're looking to expand into new markets in Europe, Asia, or the Middle East, or if you want to explore opportunities for pop-up stores, we'll be there every step of the way. Our extensive network and industry expertise mean that we can help you find the perfect placement for your brand, ensuring maximum exposure and success.",
  },
  {
    title: "Full-Service Marketing",
    text: "From 0 to 100, we handle all aspects of marketing. This includes branding, content production, campaigns, lookbooks, line sheets, retail placement, and events. We help you sell your products by providing a comprehensive suite of services tailored to meet your unique needs.",
  },
];
</script>

<!--* HTML -->
<template>
  <section class="our-services">
    <h2>
      we take care of your marketing so you can focus on your business, whether
      it be online or in a physical store.
    </h2>

    <!-- *Services Grid -->
    <div class="our-services-grid">
      <!-- *Services Left -->
      <div class="services-left">
        <h1>
          digital& <br />
          retail <br />marketing
        </h1>
        <p>
          You have an incredible brand with meticulously designed products that
          reflect your unique style and vision. But now comes the challenge -
          how do you get your brand out there? How do you ensure that your
          creations reach the right audience and make an impact in the
          competitive luxury market?
        </p>

        <p>
          That's where INCUIS Agency comes in. We're not just your average
          advertising agency; we're your partners in success, your creative
          powerhouse, and your strategic advisors all rolled into one.
        </p>
      </div>

      <!-- *Services Middle -->
      <div class="services-middle">
        <NuxtImg
          width="650"
          class="img-cover"
          src="/portfolio/lesinconnus/1.webp"
          alt=""
        />
      </div>

      <!-- *Services Right -->
      <div class="services-right">
        <h3>
          Branding, content production, campaigns, lookbooks, line sheets,
          retail placement, events, pop-up stores & more to meet your business
          needs.
        </h3>
      </div>
    </div>

    <!-- *Why Choose Us -->
    <h2 class="whatWeOfferTitle">What We Offer</h2>
    <ListInfoCards :values="services" />
  </section>
  <!-- *Image Examples -->
  <!-- <div class="image-examples-grid">
    <NuxtImg
      width="700"
      class="img-cover"
      v-for="img in exampleImgs"
      :src="`/portfolio/${img.project}/${img.img}.webp`"
      alt=""
    />
  </div> -->
</template>

<!--* Styles -->
<style lang="scss">
.our-services {
  h2 {
    text-transform: uppercase;
    text-align: center;
    max-width: 150rem;
    margin: 0 auto;
    margin-bottom: $spacing-xlg;
    margin-top: $spacing-xlg;
    font-family: $base-ff;
    letter-spacing: $letter-spacing-md;
  }
}

.our-services-grid {
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 1fr 2fr 1fr;
  gap: $spacing-xlg;
  padding-bottom: 10vh;
}

.services-left {
  h1 {
    text-align: right;
    font-weight: 400;
    font-size: 8rem;
    text-transform: uppercase;
    margin-bottom: $spacing-lg;
  }

  p {
    margin-bottom: $spacing-md;
    line-height: 1.85;
    text-transform: uppercase;
    font-size: 2.6rem;
  }
}

.services-middle {
  img {
    filter: contrast(1.1) grayscale(1);
    max-height: 95vh;
    object-position: top;
  }
}

.services-right {
  display: grid;
  place-content: center;

  h3 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: $letter-spacing-md;
    font-family: $base-ff;
  }
}

.image-examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));
  gap: $spacing-md;
}

.whatWeOfferTitle {
  margin-top: 0 !important;
  margin-bottom: $spacing-lg !important;
}

// *Media
@media (max-width: 1250px) {
  .our-services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
