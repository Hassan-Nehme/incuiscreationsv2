<!--* Script -->
<script setup>
const route = useRoute();

import { useAlbumsStore } from "/stores/albumsStore";
const albumsStore = useAlbumsStore();

// * Get the album name from the URL
const { album } = useRoute().params;

// * Find the specific album details
const details = albumsStore.allAlbums.find((det) => det.name === album);

useHead({
  title: `${route.params.album} - ${details.categories}`,
});
</script>

<!--* HTML -->
<template>
  <section>
    <!-- *Album Header -->
    <AlbumHeader
      :title="details.title"
      :description="details.description"
      :categories="details.categories"
    />

    <!-- *Album Images Grid -->
    <div
      class="grid gap-2 grid-cols-3 max-[850px]:grid-cols-2 max-[500px]:grid-cols-1 mx-2"
    >
      <!-- &Album Images -->
      <div v-for="index in details.images">
        <!-- :placeholder="[50, 25, 75, 5]" -->
        <NuxtImg
          v-motion-visibleFadeIn
          width="850"
          class="w-full min-h-full object-cover object-center rounded-1"
          loading="lazy"
          :src="`/portfolio/${album}/${index}.webp`"
          alt="a selection of images for the album you're viewing"
        />
      </div>
    </div>

    <!-- *Youtube Video -->
    <div>
      <iframe
        v-motion-visibleFadeIn
        v-for="link in details.links"
        class="w-full max-w-[180rem] aspect-[16/9] my-6 mx-auto"
        :src="`${link}` + '&rel=0'"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <!-- *Related Albums -->
  <!-- <RelatedAlbums /> -->
</template>

<!--* Styles -->
<style lang="scss"></style>
