<template>
  <div class="zombie-collapse-item">
    <div
      class="title"
      @click="handleClick"
    >
      <slot name="header">
        {{ title }}
        <svg
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
      </slot>
    </div>
    <div v-show="contentShow">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: "",
    },
  },
  inject: ["eventBus", "activeName", "changeSelect", "accordion"],
  data() {
    return {
      contentShow: false,
    };
  },
  mounted() {
    if(this.activeName.length > 0){
      this.activeName.forEach(item=>{
        this.name === item && this.open()
      })
    }
    if(this.accordion){
      this.eventBus.$on("collapseSelected", (vm) => {
        if (vm !== this) {
          this.close();
        }
      });
    }
  },
  methods: {
    handleClick() {
      if (this.contentShow) {
        this.close();
      } else {
        this.open();
      }
    },
    close() {
      if(!this.accordion){
        let index = this.activeName.findIndex(item=>{
          return item === this.name
        })
        this.activeName.splice(index,1)
        this.changeSelect(this.activeName);
      }
      this.contentShow = false;
    },
    open() {
      if(this.accordion){
        this.changeSelect(this.name);
      }else{
        this.activeName.every(item=>{
          return item !== this.name
        }) && this.activeName.push(this.name)

        this.changeSelect(this.activeName);
      }
      this.contentShow = true;
      this.eventBus.$emit("collapseSelected", this);
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles/index";
.zombie-collapse-item {
  border-bottom: 1px solid $gray-400;
  .title {
    font-size: $font-size-base;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    cursor: pointer;
    color: $gray-900;
    .icon-tabler-chevron-right {
      stroke: $gray-900;
    }
  }
}
</style>
