<template>
  <div
    class="zombie-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchend="onTouchEnd"
    @touchstart="onTouchStart"
  >
    <div
      ref="window"
      class="zombie-carousel-window"
    >
      <div class="zombie-carousel-wrapper">
        <slot />
      </div>
    </div>
    <div class="zombie-carousel-dots">
      <span
        @click="onClickPrev"
      >
        <z-icon name="left" />
      </span>
      <span
        v-for="n in childrenLength"
        :key="n"
        :class="{ active: selectedIndex === n - 1 }"
        @click="select(n - 1)"
      >
        {{ n }}
      </span>
      <span
        @click="onClickNext"
      >
        <z-icon name="right" />
      </span>
    </div>
  </div>
</template>
<script>
import ZIcon from "./Icon";

export default {
  name: "ZombieCarousel",
  components: {ZIcon},
  model: {
    prop: "selected",
    event: "changeSelect",
  },
  props: {
    /**
     * 显示name轮播
     */
    selected: {
      type: String,
      default: "",
    },
    /**
     * 自动轮播
     */
    autoPlay: {
      type: Boolean,
      default: true,
    },
    /**
     * 自动轮播翻页时间
     */
    autoPlayDelay: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined,
    };
  },
  computed: {
    selectedIndex() {
      let index = this.names.indexOf(this.selected)
      return index === -1 ? 0 : index;
    },
    names() {
      return this.items.map((vm) => vm.name);
    },
    items() {
      return this.$children.filter((vm) => {
        return vm.$options.name === "ZombieCarouselItem";
      });
    },
  },
  mounted() {
    this.updateChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
    this.childrenLength = this.items.length;
  },
  updated() {
    this.updateChildren();
  },
  beforeDestroy() {
    this.pause();
  },
  methods: {
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.autoPlay && this.playAutomatically();
    },
    onTouchStart(e) {
      this.pause();
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let {clientX: x1, clientY: y1} = this.startTouch;
      let {clientX: x2, clientY: y2} = endTouch;
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.autoPlay && this.playAutomatically();
      });
    },
    onClickPrev() {
      this.select(this.selectedIndex - 1);
    },
    onClickNext() {
      this.select(this.selectedIndex + 1);
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = index + 1;
        this.select(newIndex); // 告诉外界选中 newIndex
        this.timerId = setTimeout(run, this.autoPlayDelay);
      };
      this.timerId = setTimeout(run, this.autoPlayDelay);
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    select(newIndex) {
      this.lastSelectedIndex = this.selectedIndex;
      if (newIndex === -1) {
        newIndex = this.names.length - 1;
      }
      if (newIndex === this.names.length) {
        newIndex = 0;
      }
      this.$emit("changeSelect", this.names[newIndex]);
    },
    getSelected() {
      let first = this.items[0];
      return this.selected || first.name;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.items.forEach((vm) => {
        let reverse =
            this.selectedIndex <= this.lastSelectedIndex;
        if (this.timerId) {
          if (
              this.lastSelectedIndex === this.items.length - 1 &&
              this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
              this.lastSelectedIndex === 0 &&
              this.selectedIndex === this.items.length - 1
          ) {
            reverse = true;
          }
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.zombie-carousel {
  &-window {
    overflow: hidden;
  }

  &-wrapper {
    position: relative;
  }

  &-dots {
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      width: 20px;
      height: 20px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: #ddd;
      border-radius: 50%;
      margin: 0 8px;
      font-size: 12px;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background: black;
        color: white;

        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
