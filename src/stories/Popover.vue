<template>
  <div class="zombie-popover">
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
      <slot
        name="content"
      />
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
        left: 0
      }
    };
  },
  methods: {
    onClick($event) {
      if (this.$refs.popoverTrigger.contains($event.target)) {
        this.popoverShow = !this.popoverShow;
        if (this.popoverShow) {
          this.onShow();
        }
      }
    },
    // 定位
    positionContent() {
      document.body.appendChild(this.$refs.popoverContent);
      let { width, height, top, left } = this.$refs.popoverTrigger.getBoundingClientRect();
      this.styles = {
        top: `${top + window.scrollY + height}px`,
        left: `${left + window.scrollX}px`
      };
    },
    // 添加关闭监听
    listenToDocument() {
      let eventHandle = (e) => {
        if (this.$refs.popoverContent && !this.$refs.popoverContent.contains(e.target)) {
          this.popoverShow = false;
          console.log("关闭");
          document.removeEventListener("click", eventHandle);
        }
      };
      console.log("监听");
      document.addEventListener("click", eventHandle);
    },
    // 显示popover content
    onShow() {
      this.$nextTick(() => {
        this.positionContent();
        this.listenToDocument();
      });
    }
  }
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
