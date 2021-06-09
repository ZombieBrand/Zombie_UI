<template>
  <div class="zombie-tabs">
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
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'ZombieTabsHead'){
        vm.$children.forEach(childVm=>{
          if(childVm.$options.name === 'ZombieTabsItem' && childVm.name === this.activated){
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
  min-width: 300px;
}
</style>
