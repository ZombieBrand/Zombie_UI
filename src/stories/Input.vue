<template>
  <div :class="classes">
    <!--    <div class="zombie-input-group-prepend">1</div>-->
    <div class="icon-wrapper">
      <z-icon
        v-show="status === 'success'"
        name="success"
        class="success-icon"
      ></z-icon>
      <z-icon
        v-show="status === 'error'"
        name="error"
        class="error-icon"
      ></z-icon>
    </div>
    <label style="width: 100%">
      <input
        class="zombie-input-inner"
        :class="inputState"
        :disabled="disabled"
        :value="value"
        :readonly="readonly"
        :placeholder="placeholder"
      />
      <template v-if="status === 'error'">
        <span class="error-message">{{ errorMessage }}</span>
      </template>
    </label>
    <!--    <div class="zombie-input-group-append">2</div>-->
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "ZInput",
  components: {
    ZIcon: Icon,
  },
  props: {
    /**
     * 绑定值
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 提示信息
     */
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    /**
     * 输入框大小
     */
    size: {
      type: String,
      default: "medium",
    },
    /**
     * 是否禁用状态
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否只读
     */
    readonly: {
      type: Boolean,
      default: false,
    },
    /**
     * 状态
     */
    status: {
      type: String,
      default: "error",
    },
    /**
     * 错误提示信息
     */
    errorMessage: {
      type: String,
      default: "输入的内容错误",
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
    inputState() {
      return {
        error: true,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./input.scss";
</style>
