<template>
  <div class="zombie-collapse-item">
    <div
      class="title"
      @click="handleClick"
    >
      {{ title }} <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevron-right"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#fd0061"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <polyline points="9 6 15 12 9 18" />
      </svg>
    </div>
    <div v-show="contentShow">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieCollapseItem",
  props:{
    title:{
      type:String,
      required:true
    }
  },
  data(){
    return{
      contentShow:false
    }
  },
  methods: {
    handleClick() {
      this.contentShow = !this.contentShow
    }
  }
};
</script>

<style scoped lang="scss">
@import './styles/index';
.zombie-collapse-item{
  border-bottom: 1px solid $gray-400;
  .title{
    font-size: $font-size-base;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    color:$gray-900;
    .icon-tabler-chevron-right{
      stroke: $gray-900
    }
  }
}
</style>
