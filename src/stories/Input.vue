<template>
  <div :class="classes">
    <div class="icon-wrapper">
      <z-icon
        v-show="status === 'success'"
        name="success"
        class="success-icon"
      />
      <z-icon
        v-show="status === 'error'"
        name="error"
        class="error-icon"
      />
    </div>
    <label style="width: 100%;margin:0">
      <input
        class="zombie-input-inner"
        :class="inputState"
        :disabled="disabled"
        :value="value"
        :readonly="readonly"
        :placeholder="placeholder"
        @change="onChange"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      >
      <template v-if="status === 'error'">
        <span class="error-message">{{ errorMessage }}</span>
      </template>
    </label>
    <div class="suffix">
      <slot name="suffix" />
      <div
        v-show="loading"
        class="loading"
      />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "ZombieInput",
  components: {
    ZIcon: Icon,
  },
  model: {
    prop: "value",
    event: "onInput",
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
      default: "",
    },
    /**
     * 错误提示信息
     */
    errorMessage: {
      type: String,
      default: "输入的内容错误",
    },
     /**
     * 加载状态
     */
    loading:{
      type:Boolean,
      default:false
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
        error: this.status === "error",
        success: this.status === "success",
      };
    },
  },
  methods: {
    onChange($event) {
      this.$emit("onChange", $event.target.value);
    },
    onInput($event) {
      this.$emit("onInput", $event.target.value);
    },
    onFocus($event) {
      this.$emit("onFocus", $event.target.value);
    },
    onBlur($event) {
      this.$emit("onBlur", $event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./input.scss";
.loading {
  border: 3px solid $gray-600;
  border-top-color: $gray-400;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
