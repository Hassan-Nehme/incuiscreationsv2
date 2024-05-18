<template>
  <nav :class="{ absNav: $route.path === '/' }">
    <!-- *Logo -->
    <div class="logo">
      <nuxt-link to="/" aria-label="home"
        ><NuxtImg src="/logo.png" alt="image of logo" width="200" format="webp"
      /></nuxt-link>
    </div>

    <!-- * Menu Options -->
    <div class="menu-options" :class="{ 'menu-hide': !showMenu }">
      <ul class="nav-links">
        <!--? Home -->
        <!-- <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="portfolio page" to="/">Home</nuxt-link>
        </li> -->

        <!--? About -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="about page" to="/about" rel="nofollow"
            >About</nuxt-link
          >
        </li>

        <!--? Portfolio -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="production page" to="/production"
            >Production</nuxt-link
          >
        </li>

        <!--? Digital Marketing -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="digital marketing page" to="/digitalmarketing"
            >Digital Marketing</nuxt-link
          >
        </li>

        <!--? Brand Development-->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="digital marketing page" to="/branddevelopment"
            >Brand Development</nuxt-link
          >
        </li>

        <!--? Portfolio -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="portfolio page" to="/portfolio"
            >Portfolio</nuxt-link
          >
        </li>

        <!--? Contact -->
        <li @click="toggleMenu" class="nav-link line-under">
          <nuxt-link aria-label="about page" to="/contact" rel="nofollow"
            >Contact</nuxt-link
          >
        </li>
      </ul>

      <Icon
        name="material-symbols:close"
        size="5rem"
        color="white"
        @click="toggleMenu"
        class="closeMenu"
      />
    </div>

    <!-- *Mobile Burger Menu -->
    <div @click="toggleMenu" class="menu-icon btn-nobase">
      <button aria-label="burger menu toggle">
        <!-- ?White -->
        <Icon
          name="iconamoon:menu-burger-horizontal-thin"
          :color="`${$route.path === '/' ? 'white' : 'black'}`"
          size="4.5rem"
          class="menu-icon"
          style="cursor: pointer"
        />
      </button>
    </div>
  </nav>
</template>

<style lang="scss">
.router-link-active {
  color: $color-accent !important;
}

nav {
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
}

.logo {
  margin: 0 auto 0 0;

  img {
    max-width: 18rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 2/1;
  }
}

.nav-links {
  // background-color: red;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
  // margin: 0 -10rem;
  margin-left: -20rem;
}

.nav-link {
  a {
    transition: ease-in-out 0.5s;
    position: relative;
    font-weight: 500;

    &:hover {
      color: $color-accent;
    }
  }
}

.menu-icon {
  display: none;
  margin: 0 0 0 auto;
}

//*Burger Menu Animation Classes

.menu-hide {
  transform: translateY(100%);
  opacity: 0;
}

.closeMenu {
  display: none !important;
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
    border-top: solid 0.2rem $color-accent;

    position: fixed;
    top: 0;
    right: 0;
    background-color: $color-background-dark;
    width: 100vw;
    height: 100dvh;
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: 0.75s ease-in-out;

    a {
      text-transform: uppercase;
      font-size: 6rem;
      letter-spacing: 0.2rem;
      color: $color-text-light;
    }

    .closeMenu {
      cursor: pointer;
      display: block !important;
      color: white;
      position: absolute;
      top: 2.5%;
      right: 5%;
    }
  }

  .nav-links {
    flex-direction: column;
    margin-bottom: 3rem;
    margin-left: 0;
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
