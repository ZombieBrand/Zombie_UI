<template>
  <button
    v-waves
    type="button"
    :class="classes"
    @click="onClick"
  >
    <z-icon
      v-if="loading"
      class="loading"
      name="loading"
    />
    <span
      v-if="loading"
      class="loading-description"
    >加载中</span>
    {{ !circle && !loading ? label : "" }}
    <slot v-if="!loading" />
  </button>
</template>

<script>
import "./button.scss";
import Waves from "../directives/waves";
import Icon from "./Icon";
export default {
  name: "ZombieButton",
  directives: { Waves },
  components: {
    ZIcon: Icon,
  },
  props: {
    /**
     * 按钮的显示内容
     */
    label: {
      type: String,
      default: "",
    },
    /**
     * 尺寸
     */
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    /**
     * 类型
     */
    type: {
      type: [Boolean, String],
      default: false,
      validator: function (value) {
        return (
          ["primary", "success", "info", "warning", "danger", false].indexOf(
            value
          ) !== -1
        );
      },
    },
    /**
     * 是否圆角按钮
     */
    round: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否圆形按钮
     *
     * 开启后不显示label,请使用插槽显示内容
     */
    circle: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用状态
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否加载中状态
     */
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "zombie-button": true,
        [`zombie-button--${this.type}`]: this.type,
        "zombie-button--secondary": !this.type,
        [`zombie-button--${this.size}`]: true,
        "zombie-button--round": this.round && !this.circle,
        "zombie-button--circle": this.circle,
        disabled: this.disabled || this.loading,
      };
    },
  },
  methods: {
    onClick() {
      if (!this.disabled && !this.loading) {
        this.$emit("onClick");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./button.scss";
</style>
