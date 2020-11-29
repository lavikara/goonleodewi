<template>
  <div id="landing">
    <div class="search-input-container">
      <input
        type="text"
        placeholder="Search for photo"
        class="search-input"
        @input="getSearch"
      />
      <img
        src="../assets/img/search.svg"
        alt="search icon"
        class="search-icon"
      />
    </div>
    <div class="image-container container">
      <div class="photo-colunm">
        <div class="placeholder" v-if="this.$store.state.loading">
          <Placeholder v-for="i in 3" :key="i" />
        </div>
        <div v-else>
          <div v-for="photo in photos[0]" :key="photo.id" class="photo">
            <div class="overlay" @click="openSinglePictureModal()"></div>
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
              alt="unsplash image"
            />
            <div class="details-container">
              <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
              <p>{{ photo.user.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-colunm">
        <div class="placeholder" v-if="this.$store.state.loading">
          <Placeholder v-for="i in 3" :key="i" />
        </div>
        <div v-else>
          <div v-for="photo in photos[1]" :key="photo.id" class="photo">
            <div class="overlay" @click="openSinglePictureModal()"></div>
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
              alt="unsplash image"
            />
            <div class="details-container">
              <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
              <p>{{ photo.user.location }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-colunm">
        <div class="placeholder" v-if="this.$store.state.loading">
          <Placeholder v-for="i in 3" :key="i" />
        </div>
        <div v-else>
          <div v-for="photo in photos[2]" :key="photo.id" class="photo">
            <div class="overlay" @click="openSinglePictureModal()"></div>
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
              alt="unsplash image"
            />
            <div class="details-container">
              <h1>{{ photo.user.first_name }} {{ photo.user.last_name }}</h1>
              <p>{{ photo.user.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Placeholder from "./Placeholder";

export default {
  name: "Landing",

  components: {
    Placeholder,
  },

  data() {
    return {};
  },

  created() {
    this.$store.dispatch("getPhotos", "africa");
  },

  computed: {
    photos() {
      return this.$store.state.photos;
    },
  },

  methods: {
    getSearch() {
      let query = "";
      switch (event.target.value) {
        case "":
          query = "africa";
          break;

        default:
          query = event.target.value;
          break;
      }
      this.$store.dispatch("getPhotos", query);
    },

    // openSinglePictureModal() {
    //   console.log(event);
    //   console.log(event.target.nextElementSibling.currentSrc);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/landing.scss";
</style>
