<template>
  <div class="zombie-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZombieButtonGroup",
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(
          `z-button-group 的子元素应该全是 g-button,但是你写的是 ${name}`
        );
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./buttonGroup.scss";
</style>
