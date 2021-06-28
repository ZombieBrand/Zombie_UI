<template>
  <div
    ref="popoverWrap"
    class="zombie-popover"
  >
    <div
      ref="popoverTrigger"
      class="trigger"
      @[openEvent]="handleShow"
      @[closeEvent]="onClose"
    >
      <slot />
    </div>
    <div
      v-if="popoverShow"
      ref="popoverContent"
      :style="styles"
      class="content-wrapper"
      :class="[`position-${position}`, popperClass]"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombiePopover",
  model: {
    prop: "value",
    event: "popChange",
  },
  props: {
    /**
     * 宽度
     */
    maxWidth: {
      type: Number,
      default: 300,
    },
    /**
     * 出现位置
     */
    position: {
      type: String,
      default: "bottom",
      validator: (value) => {
        return ["top", "left", "right", "bottom"].indexOf(value) !== -1;
      },
    },
    /**
     * 为 popper 添加类名
     */
    popperClass: {
      type: String,
      default: "",
    },
    /**
     * 触发方式
     */
    trigger: {
      type: String,
      default: "click",
      validator: (value) => {
        return ["click", "hover"].indexOf(value) !== -1;
      },
    },
    value: {
      type: [Boolean, undefined],
      default: undefined,
    },
  },
  data() {
    return {
      popDisplay: false,
      positionOptions: {
        top: 0,
        left: 0,
      },
    };
  },
  computed: {
    styles() {
      return {
        top: this.positionOptions.top + "px",
        left: this.positionOptions.left + "px",
        ["max-width"]: this.maxWidth + "px",
      };
    },
    openEvent() {
      return this.trigger === "click" ? "click" : "mouseenter";
    },
    closeEvent() {
      return this.trigger === "click" ? "" : "mouseleave";
    },
    popoverShow: {
      get() {
        return this.value !== undefined ? this.value : this.popDisplay;
      },
      set(val) {
        this.value !== undefined
          ? this.$emit("popChange", val)
          : (this.popDisplay = val);
      },
    },
  },
  watch: {
    value: {
      handler(val) {
        val && this.onShow();
      },
      immediate: true,
    },
  },
  methods: {
    handleShow($event) {
      if (this.openEvent === "click") {
        this.onClick($event);
      } else {
        this.onShow();
      }
    },
    onClick($event) {
      if (this.$refs.popoverTrigger.contains($event.target)) {
        if (this.popoverShow) {
          this.onClose();
        } else {
          this.onShow();
        }
      }
    },
    onClose() {
      this.popoverShow = false;
      document.removeEventListener("click", this.eventHandle);
    },
    // 定位
    positionContent() {
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.popoverContent);
        let { width, height, top, left } =
          this.$refs.popoverTrigger.getBoundingClientRect();
        let { width: cwidth, height: cheight } =
          this.$refs.popoverContent.getBoundingClientRect();
        let handlePosistion = {
          top: () => {
            this.positionOptions = {
              top: top + window.scrollY - cheight - 10,
              left: left + window.scrollX - cwidth / 2 + width / 2,
            };
          },
          bottom: () => {
            this.positionOptions = {
              top: top + window.scrollY + height + 10,
              left: left + window.scrollX - cwidth / 2 + width / 2,
            };
          },
          left: () => {
            this.positionOptions = {
              top: top + window.scrollY - cheight / 2 + height / 2,
              left: left + window.scrollX - cwidth - 10,
            };
          },
          right: () => {
            this.positionOptions = {
              top: top + window.scrollY - cheight / 2 + height / 2,
              left: left + window.scrollX + width + 10,
            };
          },
        };
        handlePosistion[this.position]();
      });
    },
    // 添加关闭监听
    listenToDocument() {
      document.addEventListener("click", this.eventHandle);
    },
    eventHandle(e) {
      if (
        !this.$refs.popoverWrap.contains(e.target) ||
        !this.$refs.popoverWrap === e.target
      ) {
        if (
          (this.$refs.popoverContent &&
            !this.$refs.popoverContent.contains(e.target)) ||
          !this.$refs.popoverContent === e.target
        ) {
          this.onClose();
        }
      }
    },
    // 显示popover content
    onShow() {
      this.popoverShow = true;
      if (this.popoverShow) {
        this.positionContent();
        this.listenToDocument();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.zombie-popover {
  position: relative;
  display: inline-block;
  z-index: 2;
  .trigger {
    display: inline-block;
  }
}

.content-wrapper {
  position: absolute;
  z-index: 1;
  border: 1px solid #333;
  border-radius: 4px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.3));
  background: white;
  padding: 0.5em 1em;
  &:before,
  &:after {
    content: "";
    position: absolute;
    border: 11px solid transparent;
  }
  &:after {
    border: 10px solid transparent;
  }
  &.position-top {
    &:before,
    &:after {
      top: 100%;
      left: 50%;
      transform: translateX(-11px);
      border-top-color: #000000;
    }
    &:after {
      left: 50%;
      transform: translateX(-10px);
      border-top-color: #ffffff;
    }
  }
  &.position-bottom {
    &:before,
    &:after {
      bottom: 100%;
      left: 50%;
      transform: translateX(-11px);
      border-bottom-color: #000000;
    }
    &:after {
      left: 50%;
      transform: translateX(-10px);
      border-bottom-color: #ffffff;
    }
  }
  &.position-left {
    &:before,
    &:after {
      left: 100%;
      top: 50%;
      transform: translateY(-11px);
      border-left-color: #000000;
    }
    &:after {
      transform: translateY(-10px);
      border-left-color: #ffffff;
    }
  }
  &.position-right {
    &:before,
    &:after {
      right: 100%;
      top: 50%;
      transform: translateY(-11px);
      border-right-color: #000000;
    }
    &:after {
      transform: translateY(-10px);
      border-right-color: #ffffff;
    }
  }
}
</style>
