<template>
  <button v-waves type="button" :class="classes" @click="onClick">
    {{ label }}
    <slot></slot>
  </button>
</template>

<script>
import "./button.scss";
import Waves from "../directives/waves";
export default {
  name: "ZButton",
  directives: { Waves },
  props: {
    label: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
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
  },
  computed: {
    classes() {
      return {
        "zombie-button": true,
        [`zombie-button--${this.type}`]: this.type,
        "zombie-button--secondary": !this.type,
        [`zombie-button--${this.size}`]: true,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
