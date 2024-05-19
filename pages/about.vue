<!--* Script -->
<script setup>
const founders = {
  leda: {
    name: "Leda Meintani",
    title: "Chief Creative Officer & Co-founder",
    description:
      "Meet Leda Meintani, the artistic force behind Incuis Creations. With a rich background in theatre, makeup and filmmaking, Leda’s creative prowess knows no bounds. Her journey, from managing diverse artistic roles to crafting narratives, makes her a true visionary in the realm of creative direction.",
  },
  dimitris: {
    name: "Dimitris Stamatopoulos",
    title: "Chief Strategy Officer & Co-founder",
    description:
      "As the strategic mind driving Incuis Creations, Dimitris Stamatopoulos brings a wealth of knowledge in hospitality, communication, and luxury management. His expertise in understanding the finer nuances of brand strategy and luxury marketing ensures that every campaign is not just creative but strategically impactful.",
  },
  malak: {
    name: "Malak Salama",
    title: "Chief Operating Officer & Co-founder",
    description:
      "Meet Malak Salama, the filmmaking virtuoso at the heart of Incuis Creations. Hailing from Egypt, Malak’s passion for visual storytelling adds a unique dimension to our team. Her dedication to the craft transforms ideas into cinematic experiences, elevating the narrative for brands worldwide. Her strategic mindset and commitment ensure the seamless execution of projects, making her an indispensable force in steering Incuis Creations toward operational excellence.",
  },
};

const aboutInfo = {
  incuis: {
    title: "INCUIS Creations",
    description:
      "Welcome to INCUIS Creations, where innovative strategies converge with creative excellence, shaping impactful brand experiences. At the heart of our agency is a trio of visionary leaders, each contributing a unique blend of expertise to redefine the landscape of creative advertising.",
  },

  who: {
    title: "Who we are",
    description:
      "At INCUIS Creations, storytelling is not just a passion; it’s our shared mastery. We believe in the power of narratives to not only captivate but also drive results. Guided by the mantra, “It’s not creative unless it sells,” we embrace the philosophy of “Show, don’t tell,” inspired by the wisdom of David Ogilvy.",
  },
};
</script>

<!--* HTML -->
<template>
  <section class="about">
    <!-- *Page Header -->
    <AlbumHeader
      title="About Us"
      :description="['Get to know the visionaries behind INCUIS Creations.']"
    />

    <!-- * About Info -->
    <div class="about-info">
      <div v-for="info in aboutInfo" v-motion-slideBottom>
        <h4 class="font-medium">&mdash; {{ info.title }}</h4>
        <p>{{ info.description }}</p>
      </div>
    </div>

    <!-- *Vision -->
    <div class="vision">
      <h3 v-motion-enterFadeIn class="mb-3">&mdash; Our Visionaries.</h3>

      <!-- *Card Grid -->
      <div class="min-[1200px]:grid-cols-3 grid gap-3">
        <!-- *Cards -->
        <InfoCard
          v-for="founder in founders"
          :title="founder.name"
          :subtitle="founder.title"
          :description="founder.description"
        />
      </div>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss">
//& About Info
.about-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(50rem, 100%), 1fr));
  gap: 5rem;
  margin-bottom: 5rem;
}
</style>
