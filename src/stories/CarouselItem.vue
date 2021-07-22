<template>
  <transition name="slide">
    <div
      v-show="show"
      class="zombie-carousel-item"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
import {store} from "./store/carousel";
export default {
  name: "CarouselItem",
  props: {
    name: {
      type: String,
      default:''
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  computed:{
    selectName(){
      return store.selected
    },
    show(){
      if(this.name){
        return this.name === this.selectName
      }else{
        return this.visible
      }
    }
  }
};
</script>

<style scoped lang="scss">
.zombie-carousel-item {
  .slide-enter-active,
  .slide-leave-active {
    transition: all 2s;
  }
  .slide-leave-active {
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
}
</style>
