<template>
  <div id="app">
    <z-carousel >
      <z-carousel-item >
        <div class="box">
          1
        </div>
      </z-carousel-item>
      <z-carousel-item >
        <div class="box2">
          2
        </div>
      </z-carousel-item>
    </z-carousel>
  </div>
</template>

<script>
import ZCarousel from './stories/Carousel'
import ZCarouselItem from './stories/CarouselItem'
export default {
  name: "App",
  components: {
    ZCarousel,
    ZCarouselItem
  },
  data() {
    return {
      selected: '1'
    }
  },
  methods: {

  },
  mounted() {
    setTimeout(()=>{
      this.selected = '2'
    },2000)
  }
};
</script>
<style lang="scss" scoped>
  .box{
    width:100px;
    height:100px;
    background-color: red;
  }
  .box2{
    width:100px;
    height:100px;
    background-color: blue;
  }
</style>
