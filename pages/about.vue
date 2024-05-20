<!--* Script -->
<script setup>
const founders = {
  leda: {
    name: ["leda", "meintani"],
    title: "Chief Creative Officer & Co-founder",
    description:
      "Meet Leda Meintani, the artistic force behind Incuis Creations. With a rich background in theatre, makeup and filmmaking, Leda’s creative prowess knows no bounds. Her journey, from managing diverse artistic roles to crafting narratives, makes her a true visionary in the realm of creative direction.",
  },
  dimitris: {
    name: ["Dimitris", "Stamatopoulos"],
    title: "Chief Strategy Officer & Co-founder",
    description:
      "As the strategic mind driving Incuis Creations, Dimitris Stamatopoulos brings a wealth of knowledge in hospitality, communication, and luxury management. His expertise in understanding the finer nuances of brand strategy and luxury marketing ensures that every campaign is not just creative but strategically impactful.",
  },
  malak: {
    name: ["Malak", "Salama"],
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
    <div>
      <h3 v-motion-enterFadeIn class="mb-3">&mdash; Our Visionaries.</h3>

      <!-- *Card Grid -->
      <div class="min-[1200px]:grid-cols-2 grid">
        <!-- *Card -->
        <div
          v-for="founder in founders"
          :style="{
            background: `linear-gradient(
        90deg,
        rgba(2, 0, 36, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 100%
      ), url('/founders/${String(founder.name[0])}.jpeg')`,
          }"
          style="
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          "
          class="h-[140rem] max-h-[95vh] bg-no-repeat bg-cover bg-center text-white overflow-hidden"
        >
          <div class="flex flex-col justify-end min-h-[100%]">
            <div
              class="bg-accent/30 min-h-[65rem] grid min-[675px]:grid-cols-2 p-3"
            >
              <h4 class="text-6 font-bold block">
                <span class="block capitalize" v-for="n in founder.name">{{
                  n
                }}</span>
              </h4>

              <div class="mt-5">
                <p class="text-3.6 font-semibold mb-2">{{ founder.title }}</p>
                <p class="text-[2.6rem] font-medium">
                  {{ founder.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
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
