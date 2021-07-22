<template>
  <div class="zombie-carousel">
    <div class="zombie-carousel-window">
      <slot />
    </div>
  </div>
</template>

<script>
import {store,mutations} from "./store/carousel";

export default {
  name: "ZombieCarousel",
  props:{
    selected:{
      type:String,
      default:''
    },
    initialIndex:{
      type:Number,
      default:0
    }
  },
  computed:{
    selectName(){
      mutations.setSelected(this.selected)
      return store.selected
    }
  },
  mounted() {
    let initialItem = this.$children[this.initialIndex]
    initialItem.visible = true
  },
}
</script>

<style lang="scss" scoped>
  .zombie-carousel{
    display: inline-block;
    &-window{
      position: relative;
    }
  }
</style>
