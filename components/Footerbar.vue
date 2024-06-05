<script setup>
const quickLinks = [
  {
    title: "Home",
    link: "/",
  },

  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
</script>

<!--* HTML -->
<template>
  <footer>
    <h2 class="pt-3 text-5">
      Ready to work <br />
      with us?
    </h2>

    <p>info@incuiscreations.com</p>
    <hr />

    <div class="footerLinks">
      <div>
        <nuxt-link
          :aria-label="`${link.title} internal page link`"
          class="mr-2"
          v-for="link in quickLinks"
          :to="`${link.link}`"
          >{{ link.title }}</nuxt-link
        >
      </div>

      <div class="socialLinks">
        <!-- *Instagram -->
        <nuxt-link
          aria-label="instagram link"
          rel="external"
          to="https://www.instagram.com/incuiscreations?igsh=dWd4cHA3b3F0YnA0"
          target="_blank"
        >
          <Icon
            name="mdi:instagram"
            color="white"
            size="3.5rem"
        /></nuxt-link>

        <!-- *LinkedIn -->
        <nuxt-link
          aria-label="linkedIn link"
          rel="external"
          to="https://www.linkedin.com/company/incuiscreations/"
          target="_blank"
        >
          <Icon
            name="mdi:linkedin"
            color="white"
            size="3.5rem"
        /></nuxt-link>
      </div>
    </div>
  </footer>
</template>

<!--* Styles -->
<style lang="scss">
footer {
  color: $color-text-light;
  background-color: $color-background-dark;
  padding-bottom: 2rem;

  a {
    color: $color-text-light !important;
  }

  p {
    display: inline-block;
    padding: 1rem 2rem;
    border: 0.2rem solid white;
    border-radius: 3rem;
  }

  & > * {
    margin-bottom: 3rem;
  }
}

.footerLinks {
  display: flex;

  justify-content: space-between;

  .socialLinks {
    display: flex;
    gap: 2rem;
  }
}
</style>
