<template>
  <div class="zombie-tabs-head">
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
};
</script>

<style lang="scss" scoped>
@import "./styles/index";
$tab-height: 40px;
$blue: blue;
.zombie-tabs-head {
  display: flex;
  justify-content: start;
  align-items: center;
  height: $tab-height;
  border-bottom: 1px solid $gray-400;
  .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0 1em;
  }

  &::after {
    content: "";
  }

  &:hover {
    .zombie-tabs-item{
      &:not(:hover):not(.disabled){
        opacity: 0.5
      }
      &.disabled:not(:hover){
        opacity: 1
      }
    }
  }
}
</style>
