<template>
  <div class="zombie-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZombieCol",
  props: {
    /**
     * 栅格占据的列数
     */
    span: {
      type: [Number, String],
      default: 24,
    },
    /**
     * 栅格左侧的间隔格数
     */
    offset: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      /**
       * 间隙
       */
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`,
      };
    },
    colClass() {
      return [`col-${this.span}`, this.offset && `offset-${this.offset}`];
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./col.scss"
</style>
