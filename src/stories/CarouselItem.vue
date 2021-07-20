<template>
  <transition name="slide">
    <div
      v-show="visible"
      class="zombie-carousel-item"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.zombie-carousel-item {
  .slide-leave-active {
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 2s;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
}
</style>
