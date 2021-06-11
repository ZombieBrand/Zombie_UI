<template>
  <div
    class="zombie-tabs"
    :class="[`layout-${position}`]"
  >
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ZombieTabs",
  props: {
    activated: {
      type: String,
      required: true,
      default: ''
    },
    position: {
      type: String,
      default: "top",
      validator: (value) => {
        return ["top", "right", "bottom", "left"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    if(this.$children.length===0){
      console.warn('z-tabs的子组件缺少z-tabs-header和z-tabs-body')
    }
    this.eventBus.$emit('position',this.position)
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'ZombieTabsHead'){
        vm.$children.forEach(childVm=>{
          if(childVm.$options.name === 'ZombieTa bsItem' && childVm.name === this.activated){
              this.eventBus.$emit("update:activated", this.activated);
          }
        })
      }
    })
  },
};
</script>
<style scoped lang="scss">
.zombie-tabs {
  min-height: 40px;
  width: 100%;
  display: flex;
  &.layout-top{
    flex-direction: column;
  }
  &.layout-bottom{
    flex-direction: column-reverse;
  }
  &.layout-left{
    flex-flow: row nowrap;
  }
  &.layout-right{
    flex-flow: row nowrap;
  }
}
</style>
