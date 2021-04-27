<template>
  <header class="zombie-header" :style="{ height: height + 'px' }">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: "ZombieHeader",
  props: {
    height: {
      type: Number,
      default: 60,
    },
  },
};
</script>

<style scoped>
.zombie-header {
}
</style>
