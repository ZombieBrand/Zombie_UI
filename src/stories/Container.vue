<template>
  <section class="zombie-container" :class="containerClass">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "ZombieContainer",
  data() {
    return {
      containerClass: {
        hasSide: false,
      },
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "ZombieAside") {
        this.containerClass.hasSide = true;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.zombie-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSide {
    flex-direction: row;
  }
}
</style>
