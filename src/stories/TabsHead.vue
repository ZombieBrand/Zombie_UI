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
  created() {
    this.eventBus.$on('update:activated',(item)=>{

    })
  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.zombie-tabs-head {
  display: flex;
  justify-content: start;
  align-items: center;
  height: $tab-height;
  .actions-wrapper {
    margin-left: auto;
  }
  &::after {
    content: "";
  }
  &:hover{
    .zombie-tabs-item:not(:hover){
        opacity:0.5
    }
  }
}
</style>
