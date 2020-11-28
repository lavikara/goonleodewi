<template>
  <div id="app">
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: {
    Landing,
  },
};
</script>

<style lang="scss">
@import "@/assets/main.scss";
</style>
