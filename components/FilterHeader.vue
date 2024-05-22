<!--* Script -->
<script setup>
import { useAlbumsStore } from "/stores/albumsStore";

const albumsStore = useAlbumsStore();

const albums = albumsStore.allAlbums;

//& Find the albums of the currently selected tag/category
const albumsWithTag = (tag) => {
  albumsStore.currentAlbums = albums.filter((a) => a.categories.includes(tag));

  if (tag === "all projects") albumsStore.currentAlbums = albumsStore.allAlbums;
  return albumsStore.currentAlbums;
};

//& List the categories in the UI on launch
const listCategories = () => {
  let categories = ref([]);
  const tagSet = new Set();

  albums.forEach((item) => {
    item.categories.forEach((category) => tagSet.add(category));
  });

  //? Sort categories
  categories.value = [...tagSet];
  categories.value = categories.value.sort();
  categories.value = ["all projects", ...categories.value];

  return categories.value;
};
const categories = listCategories();
const currentTag = ref("all projects");
</script>

<!--* HTML -->
<template>
  <div class="filterHeader text-center mb-10" v-motion-enterFadeIn>
    <h5
      class="p-2 font-[500] cursor-pointer text-[2.6rem] inline-block uppercase hover:text-secondary transition-all duration-500 ease-in-out"
      v-for="category in categories"
      @click="
        (currentTag = category),
          albumsWithTag(currentTag),
          console.log(toRaw(albumsStore.currentAlbums))
      "
      :class="{ filterActive: currentTag === category }"
    >
      {{ category }}
    </h5>
  </div>
</template>

<!--* Styles -->
<style lang="scss">
.filterActive {
  color: $color-accent;
  transition: 0.5s ease-in-out;
}
</style>
