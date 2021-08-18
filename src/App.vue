<template>
  <div id="app">
    <z-carousel v-model="selected">
      <z-carousel-item name="1">
        <div class="box">
          1
        </div>
      </z-carousel-item>
      <z-carousel-item name="2">
        <div class="box2">
          2
        </div>
      </z-carousel-item>
      <z-carousel-item name="3">
        <div class="box3">
          3
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
  mounted() {
    setTimeout(()=>{
      this.selected = '2'
    },2000)
  },
  methods: {

  }
};
</script>
<style lang="scss" scoped>
.box{
  height:300px;
  background-color: red;
}
.box2{
  height:300px;
  background-color: blue;
}
.box3{
  height:300px;
  background-color: greenyellow;
}
</style>
