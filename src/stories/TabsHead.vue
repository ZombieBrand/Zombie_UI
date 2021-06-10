<template>
  <div
    :class="[`layout-${position}`]"
    class="zombie-tabs-head"
  >
    <slot />
    <div class="actions-wrapper">
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieTabsHead",
  inject: ["eventBus"],
  data() {
    return {
      position: "top"
    };
  },
  created() {
    this.eventBus.$on("position", (position) => {
      this.position = position;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "./styles/index";

$blue: blue;
.zombie-tabs-head {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: start;
  align-items: center;
  .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }

  &::after {
    content: "";
  }

  &:hover {
    .zombie-tabs-item {
      &:not(:hover,.disabled) {
        opacity: 0.5
      }
    }
  }
  &.layout-top{
    flex-direction: row;
    border-bottom: 1px solid $gray-400;
    margin-bottom: 10px;
  }
  &.layout-left{
    flex-direction: column;
    border-right: 1px solid $gray-400;
    margin-right: 10px;
    order: 0;
  }
  &.layout-right{
    flex-direction: column;
    border-left: 1px solid $gray-400;
    margin-left: 10px;
    order: 1;
  }
  &.layout-bottom{
    flex-direction: row;
    border-top: 1px solid $gray-400;
    margin-top: 10px;
  }
}
</style>
