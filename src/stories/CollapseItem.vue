<template>
  <div class="zombie-collapse-item">
    <div
      class="title"
      @click="handleClick"
    >
      <slot name="header">
        {{ title }}
      </slot>
      <slot name="arrow">
        <div
          :class="{open:contentShow,close:!contentShow}"
          class="arrow-wrap"
        >
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
        </div>
      </slot>
    </div>
    <CollapseTransition>
      <div
        v-show="contentShow"
        class="zombie-collapse-content"
      >
        <slot />
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import { CollapseTransition } from "vue2-transitions";
import {store} from "./store/collapse";
export default {
  name: "ZombieCollapseItem",
  components: {
    CollapseTransition,
  },
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
  inject: ["eventBus", "changeSelect"],
  data() {
    return {
      contentShow: false,
    };
  },
  computed:{
    activeName(){
      return store.selected
    },
    accordion(){
      return store.accordion
    }
  },
  mounted() {
    if (this.activeName.length > 0) {
      this.activeName.forEach((item) => {
        this.name === item && this.open();
      });
    }
    if (this.accordion) {
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
      if (!this.accordion && this.activeName.length > 0) {
        let index = this.activeName.findIndex((item) => {
          return item === this.name;
        });
        this.activeName.splice(index, 1);
        this.changeSelect(this.activeName);
      }
      this.contentShow = false;
    },
    open() {
      if (this.accordion) {
        this.changeSelect(this.name);
      } else {
        this.activeName.length > 0 &&
          this.activeName.every((item) => {
            return item !== this.name;
          }) &&
          this.activeName.push(this.name);

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
  border-radius: 8px;
  line-height: 26px;
  box-shadow: rgba(59, 63, 73, 0.15) 1px 3px 9px 0;
  transition: all 0.3s;
  .title {
    padding-left: 8px;
    font-size: $font-size-base;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    cursor: pointer;
    color: $gray-900;
    background-color: #f5f8f9;
    height: 50px;
    .icon-tabler-chevron-right {
      stroke: $gray-900;
    }
    .arrow-wrap{
      transition: transform .3s;
      &.open{
        transform: rotate(90deg);
      }
      &.close{
        transform: rotate(0deg);
      }
    }
  }
  .zombie-collapse-content {
    padding: 8px 4px;
  }
}
</style>
