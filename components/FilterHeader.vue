<!--* Script -->
<script setup>
import { useAlbumsStore } from "/stores/albumsStore";

const albumsStore = useAlbumsStore();

const albums = albumsStore.allAlbums;

//& Find the albums of the currently selected tag/category
const albumsWithTag = (tag) => {
  albumsStore.currentAlbums = albums.filter((a) => a.categories.includes(tag));

  if (albumsStore.currentAlbums.length === 0)
    albumsStore.currentAlbums = albumsStore.allAlbums;
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
  <div class="filterHeader" v-motion-enterFadeIn>
    <h5
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
.filterHeader {
  text-align: center;
  margin-bottom: 5rem;

  h5 {
    padding: 2rem;
    display: inline-block;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    font-size: 2.5rem;
  }
}

.filterActive {
  color: $color-accent;
  transition: 0.5s ease-in-out;
}
</style>
