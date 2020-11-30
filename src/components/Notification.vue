<template>
  <div class="notification">
    <div v-if="this.$store.state.photos.length !== 0">
      <h1>
        Search Results for <span>"{{ this.$store.state.searchQuery }}"</span>
      </h1>
    </div>
    <div v-if="this.$store.state.photos.length === 0">
      <h1>
        Search Result for <span>"{{ this.$store.state.searchQuery }}"</span> is
        empty
      </h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notification {
  margin-top: 1rem;

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
