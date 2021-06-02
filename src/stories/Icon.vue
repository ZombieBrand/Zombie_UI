<template>
  <svg class="z-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>
<script>
import "./assets/iconfont.js";
export default {
  name: "ZombieIcon",
  props: {
    name: {
      type: String,
      default: "loading",
    },
  },
};
</script>
<style lang="scss" scoped>
.z-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
