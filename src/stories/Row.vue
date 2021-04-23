<template>
  <div :class="rowClass" :style="rowStyle" class="zombie-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ZombieRow",
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
    },
    type: {
      type: String,
      validator: (value) => {
        return ["flex", ""].indexOf(value) !== -1;
      },
      default: "",
    },
    justify: {
      type: String,
      validator: (value) => {
        return (
          ["start", "end", "center", "space-around", "space-between"].indexOf(
            value
          ) !== -1
        );
      },
      default: "start",
    },
    align: {
      type: String,
      validator: (value) => {
        return ["top", "middle", "bottom"].indexOf(value) !== -1;
      },
      default: "top",
    },
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: `-${this.gutter / 2}px`,
        marginRight: `-${this.gutter / 2}px`,
      };
    },
    rowClass() {
      return {
        "row-flex": this.type === "flex",
        [`justify-${this.justify}`]: this.type === "flex",
        [`align-${this.align}`]: this.type === "flex",
      };
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "./row.scss";
</style>
