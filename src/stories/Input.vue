<template>
  <div :class="classes">
    <label>
      <input type="text" />
    </label>
  </div>
</template>

<script>
export default {
  name: "ZInput",
  props: {
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "zombie-input-wrapper": true,
        [`input-size-${this.size}`]: this.size,
        "is-disabled": this.disabled,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./input.scss";
</style>
