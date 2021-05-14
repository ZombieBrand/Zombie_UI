<template>
  <div ref="wrapper" :class="toastClasses" class="toast">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <!--    eslint-disable-next-line -->
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div ref="line" class="line"></div>
    <span v-if="closeButton" class="close" @click="onClickBtn">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "ZombieToast",
  props: {
    /*自动关闭时间 单位 秒*/
    autoCloseDelay: {
      type: Number,
      default: 5,
    },
    /*关闭button文字和回调方法*/
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: (toast) => {
            toast.close();
          },
        };
      },
    },
    /*是否开启用html方式显示内容*/
    enableHtml: {
      type: Boolean,
      default: false,
    },
    /*显示的位置*/
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) !== -1;
      },
    },
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    },
  },
  mounted() {
    this.updateStyles();
    if (this.autoCloseDelay > 0) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
          this.$refs.wrapper.getBoundingClientRect().height + "px";
      });
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickBtn() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate(-50%, 0%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 100%);
  }
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, 0%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.toast {
  display: flex;
  align-items: center;
  position: fixed;
  left: 50%;
  min-height: $toast-min-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  color: white;

  .message {
    padding: 6px 0;
  }

  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }

  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }

  &.position-top {
    top: 0;
    transform: translateX(-50%);
    animation: slideUp 0.3s;
    & {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);
    animation: slideDown 0.3s;
    & {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translateX(-50%, -50%);
    animation: fade-in 0.3s;
  }
}
</style>
