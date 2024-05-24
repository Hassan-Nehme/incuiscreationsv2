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
    <!-- *page header -->

    <AlbumHeader
      title="Portfolio"
      :description="[
        'Welcome to our portfolio—a dynamic showcase of our creativity, expertise, and the success stories we’ve crafted for our diverse range of clients. Each project is a testament to our commitment to delivering compelling narratives, driving engagement, and achieving measurable success.',
      ]"
    />

    <!-- *Filter Header -->
    <hr class="h-[.2rem] bg-black" />
    <FilterHeader />

    <!-- *Show Result Count-->
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
      class="grid grid-cols-4 gap-y-6 gap-x-3 max-[1150px]:grid-cols-3 max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1"
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
          <p class="text-10 font-[100]">
            <span v-if="index < 9">0</span>{{ index + 1 }}
          </p>

          <!-- *Album Cover Image -->
          <div class="overflow-hidden rounded-[1rem]">
            <NuxtImg
              width="1300"
              class="w-full h-full aspect-[1/1.25] object-cover object-center transition-all duration-700 ease-in-out contrast-[1.2]"
              :src="`/portfolio/coverphotos/${album.name}.webp`"
              :alt="`${album.name} cover photo`"
            />
          </div>

          <!-- *Album Title -->
          <h3 class="uppercase pt-3 text-5 font-[300]">{{ album.title }}</h3>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<!--* Styles -->
<style lang="scss" scoped>
.album {
  p,
  h3 {
    transition: 0.7s ease-in-out;
  }
  &:hover {
    p,
    h3 {
      color: $color-accent;
    }
    img {
      border-radius: 6rem;
      scale: 1.15;
    }
  }
}
</style>
