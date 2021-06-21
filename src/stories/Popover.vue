<template>
  <div
    ref="popoverWrap"
    class="zombie-popover"
  >
    <div
      ref="popoverTrigger"
      class="trigger"
      @click="onClick($event)"
    >
      <slot />
    </div>
    <div
      v-if="popoverShow"
      ref="popoverContent"
      :style="styles"
      class="content-wrapper"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombiePopover",
  data() {
    return {
      popoverShow: false,
      styles: {
        top: 0,
        left: 0,
      },
    };
  },
  methods: {
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
      document.body.appendChild(this.$refs.popoverContent);
      let { width, height, top, left } =
        this.$refs.popoverTrigger.getBoundingClientRect();
      this.styles = {
        top: `${top + window.scrollY + height}px`,
        left: `${left + window.scrollX}px`,
      };
    },
    // 添加关闭监听
    listenToDocument() {
      document.addEventListener("click", this.eventHandle);
    },
    eventHandle(e) {
      if (
        !this.$refs.popoverWrap.contains(e.target) ||
        this.$refs.popoverWrap === e.target
      ) {
        this.onClose();
      } else {
      }
    },
    // 显示popover content
    onShow() {
      this.popoverShow = true;
      this.$nextTick(() => {
        this.positionContent();
        this.listenToDocument();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.zombie-popover {
  position: relative;

  .trigger {
    display: inline-block;
  }
}

.content-wrapper {
  position: absolute;
  bottom: 100%;
  left: 50%;
}
</style>
