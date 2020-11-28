<template>
  <div id="landing">
    <div class="search-input-container">
      <input type="text" placeholder="Search for photo" class="search-input" />
    </div>
    <div class="image-container container">
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
      <img
        id="img1"
        srcset="
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791584/calliah%27s%20touch/calliahsimg25x2_bd6z9q.jpg 960w,
          https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791582/calliah%27s%20touch/calliahsimg25x1_ijpgze.jpg 480w
        "
        sizes="(max-width: 600px) 100vw, 33.3vw "
        src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598791580/calliah%27s%20touch/calliahsimg25-fallback_jrl6oh.jpg"
        loading="lazy"
        alt="model image"
        @click="openSinglePictureModal()"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/landing.scss";
</style>
