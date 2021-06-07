<template>
  <div class="zombie-tabs-head">
    <slot />
    <div
      ref="line"
      class="line"
    />
    <div class="actions-wrapper">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieTabsHead",
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:activated", (item, vm) => {
      console.log(item,vm)
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    });
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.zombie-tabs-head {
  display: flex;
  justify-content: start;
  align-items: center;
  height: $tab-height;
  .line {
    position: absolute;
    bottom:0;
    border-bottom:1px solid $blue;
    transition: all 0.3s;
  }
  .actions-wrapper {
    margin-left: auto;
  }

  &::after {
    content: "";
  }

  &:hover {
    .zombie-tabs-item:not(:hover) {
      opacity: 0.5
    }
  }
}
</style>
