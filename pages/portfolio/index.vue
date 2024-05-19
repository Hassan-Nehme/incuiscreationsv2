<!--* Script -->
<script setup>
import { useAlbumsStore } from "/stores/albumsStore";

const albumsStore = useAlbumsStore();

//? Set Current Albums to All Albums on launch
albumsStore.currentAlbums = albumsStore.allAlbums;
</script>

<!--* HTML -->
<template>
  <section>
    <div>
      <div class="overflow-hidden">
        <h1
          v-motion-slideBottom
          class="uppercase text-[25rem] font-semibold max-[1200px]:text-12 max-[750px]:text-9 tracking-[1.5rem]"
        >
          Portfolio
        </h1>
      </div>

      <p class="max-w-[95rem] mb-5 text-3" v-motion-slideBottom>
        Welcome to our portfolio—a dynamic showcase of our creativity,
        expertise, and the success stories we’ve crafted for our diverse range
        of clients. Each project is a testament to our commitment to delivering
        compelling narratives, driving engagement, and achieving measurable
        success
      </p>
    </div>

    <!-- *Filter Header -->
    <FilterHeader />

    <!-- *How Many Results -->
    <div v-auto-animate>
      <p
        class="text-3 mb-5 uppercase text-right text-accent"
        :key="albumsStore.currentAlbums.length"
      >
        {{ albumsStore.currentAlbums.length }} result<span
          v-if="albumsStore.currentAlbums.length > 1"
          >s</span
        >
      </p>
    </div>

    <!-- *Albums Grid -->
    <div
      class="grid grid-cols-3 gap-y-6 gap-x-3 max-[1150px]:grid-cols-2 max-[750px]:grid-cols-1"
    >
      <!-- *Album -->
      <nuxt-link
        v-motion-visibleFadeIn
        v-for="(album, index) in albumsStore.currentAlbums"
        :key="album.name"
        :to="{ path: `/portfolio/${album.name}` }"
        class="album min-[750px]:pr-3 min-[750px]:border-r-[1px] border-black max-[750px]:border-b-[2px] max-[750px]:pb-3"
      >
        <div>
          <!-- *Album Number -->
          <p class="text-12 font-thin">
            <span v-if="index < 9">0</span>{{ index + 1 }}
          </p>

          <!-- *Album Cover Image -->
          <div class="overflow-hidden rounded-[1rem]">
            <img
              class="w-full h-full aspect-[1/1.25] object-cover object-center transition-all duration-700 ease-in-out contrast-[1.2]"
              :src="`/portfolio/coverphotos/${album.name}.webp`"
              :alt="`${album.name} cover photo`"
            />
          </div>

          <!-- *Album Title -->
          <h3 class="uppercase pt-3 text-6">{{ album.title }}</h3>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.album {
  &:hover {
    p,
    h3 {
      color: $color-accent;
      transition: 0.5s ease-in-out;
    }
    img {
      border-radius: 6rem;
      scale: 1.15;
    }
  }
}
</style>
