<template>
  <div id="landing">
    <div class="search-input-container">
      <input type="text" placeholder="Search for photo" class="search-input" />
      <img
        src="../assets/img/search.svg"
        alt="search icon"
        class="search-icon"
      />
    </div>
    <div class="image-container container">
      <div class="photo-colunm">
        <div v-for="photo in photos[0]" :key="photo.id" class="photo">
          <div class="overlay"></div>
          <img
            :srcset="
              `
            ${photo.urls.raw}&w=1500&dpr=2 1500w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.small} 400w
            `
            "
            sizes="(max-width: 600px) 100vw, 33.3vw "
            :src="`${photo.urls.thumb}`"
            loading="lazy"
            alt="model image"
            @click="openSinglePictureModal()"
          />
          <div class="details-container">
            <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
            <p>{{ photo.user.location }}</p>
          </div>
        </div>
      </div>
      <div class="photo-colunm">
        <div v-for="photo in photos[1]" :key="photo.id" class="photo">
          <div class="overlay"></div>
          <img
            :srcset="
              `
            ${photo.urls.raw}&w=1500&dpr=2 1500w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.small} 400w
            `
            "
            sizes="(max-width: 600px) 100vw, 33.3vw "
            :src="`${photo.urls.thumb}`"
            loading="lazy"
            alt="model image"
            @click="openSinglePictureModal()"
          />
          <div class="details-container">
            <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
            <p>{{ photo.user.location }}</p>
          </div>
        </div>
      </div>
      <div class="photo-colunm">
        <div v-for="photo in photos[2]" :key="photo.id" class="photo">
          <div class="overlay"></div>
          <img
            :srcset="
              `
            ${photo.urls.raw}&w=1500&dpr=2 1500w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.small} 400w
            `
            "
            sizes="(max-width: 600px) 100vw, 33.3vw "
            :src="`${photo.urls.thumb}`"
            loading="lazy"
            alt="model image"
            @click="openSinglePictureModal()"
          />
          <div class="details-container">
            <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
            <p>{{ photo.user.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",

  computed: {
    photos() {
      const totalPhotos = this.$store.state.photos;
      const itemsInSubArray = 2;
      const newArray = new Array(
        Math.ceil(totalPhotos.length / itemsInSubArray)
      )
        .fill()
        .map((_) => totalPhotos.splice(0, itemsInSubArray));
      console.log(newArray);
      return newArray;
    },
  },

  mounted() {
    this.$store.dispatch("getPhotos");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/landing.scss";
</style>
