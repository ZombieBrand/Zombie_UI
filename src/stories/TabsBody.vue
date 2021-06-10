<template>
  <div
    class="zombie-tabs-body"
    :class="[`layout-${position}`]"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZombieTabsBody",
  inject: ["eventBus"],
  data(){
    return{
      position:'top'
    }
  },
  created() {
    this.eventBus.$on('position',(position)=>{
      this.position = position
    })
  }
};
</script>
<style scoped lang="scss">
.zombie-tabs-body{
  flex-grow: 1;
}
</style>
