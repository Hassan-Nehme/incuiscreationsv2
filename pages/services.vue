<!--* Script -->
<script setup>
useHead({
  title: "Services - Incuis Creations Marketing & Production Agency",
});

const services = [
  {
    title: "Print Production",
    details:
      "Brochures, posters, banners, and tangible collateral crafted with precision.",
  },
  {
    title: "TV Commercial Production",
    details:
      "Scriptwriting, casting, filming, editing, and post-production for captivating television ads.",
  },
  {
    title: "Radio Commercial Production",
    details:
      "Complete radio ad creation, from scriptwriting to voiceover recording and editing.",
  },
  {
    title: "Video Production",
    details:
      "Diverse video content for online platforms, social media, and dynamic presentations.",
  },
  {
    title: "Photography",
    details:
      "Expertly organized photoshoots for product photography, brand imagery, and impactful campaigns.",
  },
  {
    title: "Animation & Motion Graphics",
    details:
      "Digital magic for online ads, social media content, and interactive presentation.",
  },
  {
    title: "Digital Content Production",
    details:
      "Multimedia excellence for online platforms, including website banners, interactive content, and video ads.",
  },
  {
    title: "Copywriting",
    details:
      "Crafting compelling and persuasive text across various mediums to elevate your brand message.",
  },
  {
    title: "Graphic Design",
    details:
      "Creating visually stunning and effective advertising materials for digital and print.",
  },
  {
    title: "Packaging Design",
    details:
      "Strategic design to align product packaging with your brand image and key messages.",
  },
  {
    title: "Post-Production Services",
    details:
      "Editing and enhancing content to meet the highest standards, ensuring it aligns with your creative vision.",
  },
  {
    title: "Lookbooks",
    details:
      "Coordination of photoshoots for captivating images that enhance your brand’s visual narrative.",
  },
  {
    title: "Linesheets",
    details:
      "Concise documents aligning product details with brand image and key messages for effective communication.",
  },
  {
    title: "Editorials",
    details:
      "Editorial content creation, from storytelling and photoshoot coordination to creative direction and optimized presentation on various platforms.",
  },
  {
    title: "Art Direction",
    details:
      "Art direction shapes visual narratives through creative guidance in design, film, and advertising.",
  },
  {
    title: "Creative Direction",
    details:
      "Creative direction guides the artistic vision to achieve impactful outcomes.",
  },
];

const marketing = [
  {
    title: "SEO (Search Engine Optimization)",
    details:
      "Elevate your online visibility and rankings with our SEO expertise. We optimize your digital presence to ensure your brand stands out in search engine results, driving organic traffic and engagement.",
  },
  {
    title: "Google Ads",
    details:
      "Maximize your online reach with targeted Google Ads campaigns. Our team creates strategic and impactful ad campaigns that resonate with your audience, driving traffic and conversions.",
  },
  {
    title: "Facebook Ads",
    details:
      "Leverage the power of social media with our Facebook Ads services. We craft visually appealing and engaging ads that reach your target audience on one of the largest social media platforms.",
  },
  {
    title: "Email Marketing",
    details:
      "Nurture your audience and drive conversions with our email marketing solutions. From compelling content to visually appealing designs, we create email campaigns that resonate with your audience.",
  },
  {
    title: "Content Scheduling",
    details:
      "Streamline your content distribution with our content scheduling services. We ensure that your content is strategically scheduled across various platforms, maximizing visibility and engagement.",
  },
  {
    title: "Audience Engagement",
    details:
      "Build and maintain meaningful connections with your audience through our audience engagement strategies. From social media interactions to community building, we ensure your brand stays connected.",
  },
];

const solutions = [
  {
    title: "Brand Identity Development",
    details:
      "Define and refine your brand identity with our expert services. We work collaboratively to create a unique and compelling brand identity that resonates with your target audience.",
  },
  {
    title: "Logo Design",
    details:
      "Make a lasting impression with a logo that speaks volumes. Our design team crafts logos that encapsulate your brand’s essence, leaving a memorable mark on your audience.",
  },
  {
    title: "Visual Branding",
    details: `Elevate your brand’s visual language with our visual branding services. From color palettes to typography, we ensure a cohesive and visually appealing brand presence across all touchpoints.`,
  },
  {
    title: "Brand Strategy",
    details:
      "Develop a robust brand strategy that guides your brand’s journey. Our strategic approach considers market trends, competitor analysis, and consumer behavior to position your brand for success.",
  },
  {
    title: "Brand Messaging",
    details: `Craft compelling brand messages that resonate with your audience. Our team specializes in creating narratives that not only communicate your brand’s values but also engage and inspire.`,
  },
  {
    title: "Brand Collateral",
    details:
      "From business cards to marketing materials, we design brand collateral that reflects your brand’s identity and leaves a lasting impression on your audience.",
  },
  {
    title: "Retail Placement",
    details:
      "Strategic placement in key luxury markets such as Dubai, Hong Kong, and Paris to maximize brand exposure and success.",
  },
  {
    title: "Pop-Up Stores",
    details:
      "Engaging retail experiences to showcase your brand in unique and immersive ways.",
  },
  {
    title: "Events",
    details:
      "Curated events to elevate brand visibility and engagement, creating memorable experiences for your audience.",
  },
];
</script>

<!--* HTML -->
<template>
  <section>
    <!-- *page header -->
    <AlbumHeader
      title="SERVICES"
      :description="[
        '      At Incuis Creations, we’re your creative partners, bringing your brand to life through a spectrum of production services, digital marketing, & brand development solutions tailored to your unique vision.',
      ]"
    />

    <!-- *Services Grid -->
    <div class="grid min-[1150px]:grid-cols-4">
      <!-- *First Column - Images -->
      <div class="flex flex-col justify-between">
        <!-- *Image 1-->
        <nuxt-link
          to="/portfolio/lesinconnus"
          class="max-w-[40rem]"
          v-motion-slideBottom
        >
          <img
            class="rounded-1"
            src="/portfolio/lesinconnus/1.webp"
            alt=""
          />
        </nuxt-link>

        <!-- *Image 2-->
        <div class="flex justify-end max-[1150px]:mt-5">
          <nuxt-link
            to="/portfolio/imageamplified"
            class="max-w-[40rem] mr-5"
            v-motion-slideBottom
          >
            <img
              class="rounded-1"
              src="/portfolio/imageamplified/7.webp"
              alt=""
            />
          </nuxt-link>
        </div>
      </div>

      <!-- *Second Column - Production Services -->
      <div
        class="p-2 max-[1150px]:mt-3"
        v-motion-enterFadeIn
      >
        <h2 class="mb-3 font-bold capitalize">production services</h2>

        <ShowService
          v-for="(service, index) in services"
          :title="service.title"
          :details="service.details"
          :index="index"
        />
      </div>

      <!-- *Third Column - Image -->
      <div class="grid place-content-center">
        <nuxt-link
          to="/portfolio/louisexincouture"
          class="max-w-[40rem]"
          v-motion-slideBottom
        >
          <img
            class="rounded-1"
            src="/portfolio/louisexincouture/1.webp"
            alt=""
          />
        </nuxt-link>
      </div>

      <!-- *Fourth Column - List Services -->
      <div
        class="p-2 min-[1150px]:ml-3 max-[1150px]:mt-5"
        v-motion-enterFadeIn
      >
        <!-- *Digital Marketing -->
        <h2 class="mb-3 font-bold capitalize">digital marketing</h2>
        <ShowService
          v-for="(m, index) in marketing"
          :title="m.title"
          :details="m.details"
          :index="index"
        />

        <!-- *Brand Development -->
        <h2 class="mb-3 font-bold capitalize">brand development</h2>
        <ShowService
          v-for="(solution, index) in solutions"
          :title="solution.title"
          :details="solution.details"
          :index="index"
        />
      </div>

      <!--  -->
    </div>
  </section>

  <!-- *Media Collabs -->
  <MediaCollabs />
</template>

<!--* Styles -->
<style lang="scss"></style>
