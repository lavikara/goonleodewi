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
      <div>
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
          srcset="
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598789112/calliah%27s%20touch/calliahsimg12x4_tlzose.jpg 1920w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598789111/calliah%27s%20touch/calliahsimg12x3_zxc2gn.jpg 1440w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598789110/calliah%27s%20touch/calliahsimg12x2_ivgbwd.jpg  960w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598789110/calliah%27s%20touch/calliahsimg12x1_xwnouh.jpg  480w
          "
          src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598789110/calliah%27s%20touch/calliahsimg12-fallback_jv3pam.jpg"
          loading="lazy"
          sizes="(max-width: 600px) 100vw, 33.3vw "
          alt="model image"
          @click="openSinglePictureModal()"
        />
      </div>
      <div>
        <img
          id="img2"
          srcset="
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598785941/calliah%27s%20touch/calliahsimg1x3_crx7kv.jpg 1440w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598785940/calliah%27s%20touch/calliahsimg1x2_k5mcz8.jpg  960w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598785940/calliah%27s%20touch/calliahsimg1x1_sa8wvv.jpg  480w
          "
          sizes="(max-width: 600px) 100vw, 33.3vw "
          src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598785940/calliah%27s%20touch/calliahsimg1-fallback_ipweki.jpg"
          loading="lazy"
          alt="model image"
          @click="openSinglePictureModal()"
        />
        <img
          id="img3"
          srcset="
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790842/calliah%27s%20touch/calliahsimg19x2_m9xobo.jpg 960w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790841/calliah%27s%20touch/calliahsimg19x1_w3vukb.jpg 480w
          "
          src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790841/calliah%27s%20touch/calliahsimg19-fallback_atln6i.jpg"
          loading="lazy"
          sizes="(max-width: 600px) 100vw, 33.3vw "
          alt="model image"
          @click="openSinglePictureModal()"
        />
      </div>
      <div>
        <img
          id="img4"
          srcset="
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790842/calliah%27s%20touch/calliahsimg18x2_os9evh.jpg 960w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790841/calliah%27s%20touch/calliahsimg18x1_qqggho.jpg 480w
          "
          src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790841/calliah%27s%20touch/calliahsimg18-fallback_qbwqys.jpg"
          loading="lazy"
          sizes="(max-width: 600px) 100vw, 33.3vw "
          alt="model image"
          @click="openSinglePictureModal()"
        />
        <img
          id="img2"
          srcset="
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790223/calliah%27s%20touch/calliahsimg15x3_esweap.jpg 1440w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790221/calliah%27s%20touch/calliahsimg15x2_bdpzdz.jpg  960w,
            https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790221/calliah%27s%20touch/calliahsimg15x1_qm8sow.jpg  480w
          "
          sizes="(max-width: 600px) 100vw, 33.3vw "
          src="https://res.cloudinary.com/dfsayl1xs/image/upload/v1598790221/calliah%27s%20touch/calliahsimg15-fallback_n9zbmu.jpg"
          loading="lazy"
          alt="model image"
          @click="openSinglePictureModal()"
        />
      </div>
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
