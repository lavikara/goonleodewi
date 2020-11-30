<template>
  <div id="landing">
    <div class="search-input-container">
      <div class="input-container">
        <input
          type="text"
          placeholder="Search for photo"
          class="search-input"
          @change="getSearch"
        />
        <img
          src="../assets/img/search.svg"
          alt="search icon"
          class="search-icon"
        />
      </div>
      <Notification
        v-if="
          this.$store.state.searchQuery !== 'africa' &&
            this.$store.state.photos.length !== 0
        "
      />
    </div>
    <div class="placeholder container" v-if="this.$store.state.loading">
      <div>
        <ContentLoader v-for="i in 3" :key="i" />
      </div>
      <div>
        <ContentLoader v-for="i in 3" :key="i" />
      </div>
      <div>
        <ContentLoader v-for="i in 3" :key="i" />
      </div>
    </div>
    <div class=" image-div container" v-else>
      <Notification
        v-if="
          this.$store.state.photos.length === 0 && !this.$store.state.loading
        "
      />
      <div class="image-container">
        <div class="photo-colunm">
          <div>
            <div v-for="photo in photos[0]" :key="photo.id" class="photo">
              <div class="overlay" @click="openSinglePictureModal()"></div>
              <img
                :srcset="
                  `
            ${photo.urls.raw}&w=2560&amp;auto=format&amp;fit=crop&amp;q=80 2560w,
            ${photo.urls.raw}&w=1600&amp;auto=format&amp;fit=crop&amp;q=80 1600w,
            ${photo.urls.raw}&w=1536&amp;auto=format&amp;fit=crop&amp;q=80 1536w,
            ${photo.urls.raw}&w=1440&amp;auto=format&amp;fit=crop&amp;q=80 1440w,
            ${photo.urls.raw}&w=1366&amp;auto=format&amp;fit=crop&amp;q=80 1366w,
            ${photo.urls.raw}&w=1280&amp;auto=format&amp;fit=crop&amp;q=80 1280w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.raw}&w=1024&amp;auto=format&amp;fit=crop&amp;q=80 1024w,
            ${photo.urls.raw}&w=768&amp;auto=format&amp;fit=crop&amp;q=80 768w,
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
          <div>
            <div v-for="photo in photos[1]" :key="photo.id" class="photo">
              <div class="overlay" @click="openSinglePictureModal()"></div>
              <img
                :srcset="
                  `
            ${photo.urls.raw}&w=2560&amp;auto=format&amp;fit=crop&amp;q=80 2560w,
            ${photo.urls.raw}&w=1600&amp;auto=format&amp;fit=crop&amp;q=80 1600w,
            ${photo.urls.raw}&w=1536&amp;auto=format&amp;fit=crop&amp;q=80 1536w,
            ${photo.urls.raw}&w=1440&amp;auto=format&amp;fit=crop&amp;q=80 1440w,
            ${photo.urls.raw}&w=1366&amp;auto=format&amp;fit=crop&amp;q=80 1366w,
            ${photo.urls.raw}&w=1280&amp;auto=format&amp;fit=crop&amp;q=80 1280w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.raw}&w=1024&amp;auto=format&amp;fit=crop&amp;q=80 1024w,
            ${photo.urls.raw}&w=768&amp;auto=format&amp;fit=crop&amp;q=80 768w,
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
          <div>
            <div v-for="photo in photos[2]" :key="photo.id" class="photo">
              <div class="overlay" @click="openSinglePictureModal()"></div>
              <img
                :srcset="
                  `
            ${photo.urls.raw}&w=2560&amp;auto=format&amp;fit=crop&amp;q=80 2560w,
            ${photo.urls.raw}&w=1600&amp;auto=format&amp;fit=crop&amp;q=80 1600w,
            ${photo.urls.raw}&w=1536&amp;auto=format&amp;fit=crop&amp;q=80 1536w,
            ${photo.urls.raw}&w=1440&amp;auto=format&amp;fit=crop&amp;q=80 1440w,
            ${photo.urls.raw}&w=1366&amp;auto=format&amp;fit=crop&amp;q=80 1366w,
            ${photo.urls.raw}&w=1280&amp;auto=format&amp;fit=crop&amp;q=80 1280w,
            ${photo.urls.regular} 1080w,
            ${photo.urls.raw}&w=1024&amp;auto=format&amp;fit=crop&amp;q=80 1024w,
            ${photo.urls.raw}&w=768&amp;auto=format&amp;fit=crop&amp;q=80 768w,
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

    <!-- single Image Modal -->
    <div class="modal" ref="modal">
      <span class="close" @click="closeSinglePictureModal">
        <img src="../assets/img/close.svg" alt="model image"
      /></span>
      <div class="inner-modal">
        <img class="modal-img" ref="modalImg" />
        <div class="details-container">
          <h1 class="photographer" ref="photographer"></h1>
          <p class="location" ref="location"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLoader from "./ContentLoader";
import Notification from "./Notification";

export default {
  name: "Landing",

  components: {
    ContentLoader,
    Notification,
  },

  data() {
    return {};
  },

  created() {
    this.$store.dispatch("getPhotos", this.$store.state.searchQuery);
  },

  computed: {
    photos() {
      return this.$store.state.photos;
    },
  },

  methods: {
    getSearch() {
      this.$store.dispatch("resetLoading", true);
      this.$store.dispatch("resetPhotos");
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
      event.target.value = "";
    },

    openSinglePictureModal() {
      const modal = this.$refs.modal;
      const modalImg = this.$refs.modalImg;
      const photographer = this.$refs.photographer;
      const location = this.$refs.location;
      modalImg.src = event.target.nextElementSibling.currentSrc;
      modal.classList.remove("zero-opacity");
      modal.classList.add("add-opacity");
      modal.style.display = "flex";
      photographer.textContent =
        event.target.offsetParent.lastElementChild.firstElementChild.innerText;
      location.textContent =
        event.target.offsetParent.lastElementChild.lastElementChild.innerText;
    },

    closeSinglePictureModal() {
      let modal = this.$refs.modal;
      modal.classList.remove("add-opacity");
      modal.classList.add("zero-opacity");
      setTimeout(() => {
        modal.style.display = "none";
      }, 1000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/landing.scss";
</style>
