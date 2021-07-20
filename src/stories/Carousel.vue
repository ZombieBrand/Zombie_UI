<template>
  <div class="zombie-carousel">
    <div class="zombie-carousel-window">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieCarousel",
  props:{
    selected:{
      type:String,
      default:''
    }
  },
  data(){
    return{
    }
  },
  mounted() {
    let first = this.$children[0]
    let second = this.$children[1]
    first.visible = true
    setTimeout(()=>{
      first.visible = false
      second.visible = true
    },1000)
  }
}
</script>

<style lang="scss" scoped>
  .zombie-carousel{
    display: inline-block;
    &-window{
      position: relative;
      display: flex;
    }
  }
</style>
