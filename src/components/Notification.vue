<template>
  <div class="notification">
    <h1 v-if="this.$store.state.photos.length !== 0">
      Search Results for <span>"{{ this.$store.state.searchQuery }}"</span>
    </h1>
    <h1 v-if="this.$store.state.photos.length === 0">
      {{ this.$store.state.notification }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 1s;
  animation-name: zoom;
  animation-duration: 1s;

  @-webkit-keyframes zoom {
    from {
      -webkit-transform: scale(0.9);
      opacity: 0;
    }
    to {
      -webkit-transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes zoom {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  h1 {
    span {
      color: #a6b3c5;
      text-transform: capitalize;
    }
  }
}
</style>
