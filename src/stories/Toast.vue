<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <!--    eslint-disable-next-line -->
    <div v-else v-html="$slots.default[0]"></div>
    <div class="line"></div>
    <span v-if="closeButton" class="close" @click="closeButton.callback()">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "ZombieToast",
  props: {
    /*是否开启自动关闭功能*/
    autoClose: {
      type: Boolean,
      default: true,
    },
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
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close();
      }, this.autoCloseDelay * 1000);
    }
  },
  methods: {
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

<style scoped lang="scss">
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  height: $toast-height;
  font-size: $font-size;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
.close {
  padding-left: 16px;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>
