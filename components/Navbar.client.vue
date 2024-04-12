<template>
  <nav :class="{ absNav: $route.path === '/' }">
    <!-- *Logo -->
    <div class="logo">
      <nuxt-link to="/" aria-label="home"
        ><NuxtImg src="/logo.png" alt="image of logo" width="200" format="webp"
      /></nuxt-link>
    </div>

    <!-- * Menu Options -->
    <div class="menu-options" v-if="showMenu">
      <ul class="nav-links">
        <!--? Services -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="production page" to="/">Services</nuxt-link>
        </li>

        <!--? Portfolio -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="portfolio page" to="/">Portfolio</nuxt-link>
        </li>

        <!--? About -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="about page" to="/" rel="nofollow"
            >About</nuxt-link
          >
        </li>

        <!--? Contact -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="about page" to="/" rel="nofollow"
            >Get in touch</nuxt-link
          >
        </li>
      </ul>
    </div>

    <!-- *Mobile Burger Menu -->
    <div @click="toggleMenu" class="menu-icon btn-nobase">
      <button aria-label="burger menu toggle">
        <!-- ?White -->
        <Icon
          name="iconamoon:menu-burger-horizontal-bold"
          color="white"
          size="5rem"
        />
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
// .router-link-active {
//   color: $color-accent !important;
// }

nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  // background-color: blue;
}

.logo {
  margin: 0 auto 0 0;

  img {
    max-width: 20rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 2/1;
  }
}

.menu-options {
  display: grid;
}

.nav-links {
  // background-color: red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  a {
    transition: ease-in-out 0.5s;
    position: relative;
    font-weight: 400;

    &:hover {
      color: $color-accent;
    }
  }
}

.menu-icon {
  display: none;
  margin: 0 0 0 auto;
}

// *MEDIA
//& 1150px
//? Hambuger Menu Mobile
@media (max-width: 1150px) {
  .menu-icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }

  nav {
    grid-template-columns: repeat(2, 1fr);
  }

  .menu-options {
    position: fixed;
    top: 10vh;
    right: 0;
    background-color: $color-background-dark;
    width: 100vw;
    height: 90dvh;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      font-size: 6rem;
      letter-spacing: 0.3rem;
      color: $color-text-light;
    }
  }

  .nav-links {
    flex-direction: column;
    margin-bottom: 3rem;
  }

  .btnNav {
    position: relative;
    margin-top: 3rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      border: 0.1rem solid $color-accent;
      width: 100%;
      transform: translateX(-10%) translateY(-30%);
    }
  }
}

//& 400px
@media (max-width: 400px) {
  .logo {
    img {
      max-width: 18rem;
    }
  }
}
</style>

<script setup>
// *Navbar Menu Logic
const body = document.querySelector("body");
const showMenu = ref(false);
const query = window.matchMedia("(min-width:1150px)");

const toggleMenu = () => {
  if (!query.matches) {
    showMenu.value = !showMenu.value;

    showMenu.value
      ? (body.style.overflow = "hidden")
      : (body.style.overflow = "visible");
  }
};

// *Media Query Menu
//? Check viewport size on launch
if (query.matches) showMenu.value = true;

//? Show/Hide menu on viewport size change
window.matchMedia("(max-width: 1150px)").onchange = (e) => {
  e.matches ? (showMenu.value = false) : (showMenu.value = true);
};

// ? Allow Scroll on larger screens incase someone opens nav menu without closing it and increases viewport size
query.onchange = (e) => {
  if (e.matches) body.style.overflow = "visible";
};
</script>
