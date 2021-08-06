<template>
  <div class="zombie-carousel">
    <div class="zombie-carousel-window">
      <div class="zombie-carousel-wrapper">
        <slot />
      </div>
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
    },
    autoplay:{
      type: Boolean,
      default: true
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
  methods:{
    autoPlay(){

    },
    getSelected(initialIndex){
      let initialItem = this.$children[initialIndex]
      initialItem.visible = true
    }
  },
}
</script>

<style lang="scss" scoped>
  .zombie-carousel{
    display: inline-block;
    &-wrapper{
      position: relative;
    }
  }
</style>
