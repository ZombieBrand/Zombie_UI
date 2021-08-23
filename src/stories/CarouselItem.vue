<template>
  <div>
    <template v-if="animationEnabled">
      <transition name="slide">
        <div
          v-if="visible"
          class="zombie-carousel-item"
          :class="{ reverse }"
        >
          <slot />
        </div>
      </transition>
    </template>
    <template v-else>
      <div
        v-if="visible"
        class="zombie-carousel-item"
        :class="{ reverse }"
      >
        <slot />
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "ZombieCarouselItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
      reverse: false,
      animationEnabled: false,
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    },
  },
  updated() {
    this.animationEnabled = true;
  },
};
</script>
<style lang="scss" scoped>
.zombie-carousel-item {
}
.slide-leave-active {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter {
  transform: translateX(100%);
}
.slide-enter.reverse {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>
