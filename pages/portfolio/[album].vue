<!--* Script -->
<script setup>
import { useAlbumsStore } from "/stores/albumsStore";
const { album } = useRoute().params;

const albumsStore = useAlbumsStore();

const details = albumsStore.allAlbums.find((det) => det.name === album);
</script>

<!--* HTML -->
<template>
  <!-- *Album Header -->
  <AlbumHeader :album="details" />

  <!-- *Album Images Grid -->
  <div
    class="grid gap-1 grid-cols-3 max-[850px]:grid-cols-2 max-[500px]:grid-cols-1 mx-2"
  >
    <!-- &Album Images -->
    <div v-for="index in details.images">
      <NuxtImg
        width="850"
        class="w-full min-h-full object-cover object-center"
        :placeholder="[50, 25, 75, 5]"
        :src="`/portfolio/${album}/${index}.webp`"
        alt="a selection of images for the album you're viewing"
      />
    </div>
  </div>

  <section>
    <!-- *Youtube Video -->
    <div>
      <iframe
        v-for="link in details.links"
        class="w-full aspect-[16/9] mb-5 mt-5"
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
