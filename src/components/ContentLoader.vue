<template>
  <div>
    <div class="line">
      <div class="photo-details">
        <p></p>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["width", "height"],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.line {
  width: 20rem;
  height: 25rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  background: rgba(130, 130, 130, 0.2);
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, rgba(130, 130, 130, 0.2)),
    color-stop(18%, rgba(130, 130, 130, 0.3)),
    color-stop(33%, rgba(130, 130, 130, 0.2))
  );
  background: linear-gradient(
    to right,
    rgba(130, 130, 130, 0.2) 8%,
    rgba(130, 130, 130, 0.3) 18%,
    rgba(130, 130, 130, 0.2) 33%
  );
  background-size: 800px 100px;
  animation: wave-lines 2s infinite ease-out;

  .photo-details {
    padding-top: 18rem;
    p {
      width: 12rem;
      height: 1rem;
      background-color: rgba(130, 130, 130, 0.1);
      border-radius: 3px;
      margin: 1rem;

      &:nth-child(2) {
        width: 8rem;
      }
    }
  }
}
@keyframes wave-lines {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
