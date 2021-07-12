<template>
  <div class="popover-container">
    <div class="current-wrapper">
      <div
        v-for="(item, index) in childData"
        :key="item.value"
        class="popover-item"
        :class="{ active: index === selectedIndex && isSelected }"
        @click="handleClick(item, index)"
      >
        <span class="popover-label">
          {{ item.label }}
        </span>
        <div
          v-if="item.children && item.children.length > 0"
          class="cascader-icon"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#6c757d"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </div>
      </div>
    </div>
    <ZombieCascaderItem
      v-if="childrenShow && childrenOptions && childrenOptions.length > 0"
      :child-data="childrenOptions"
      :level="level + 1"
    />
  </div>
</template>

<script>
export default {
  name: "ZombieCascaderItem",
  props: {
    childData: {
      type: Array,
      default: () => [],
    },
    level: {
      type: Number,
      default: 0,
    }
  },
  inject: ["onClose", "selectNode"],
  data() {
    return {
      childrenShow: false,
      selectedNode: null,
      isSelected: false,
      selectedIndex: null,
    };
  },
  computed: {
    childrenOptions() {
      return this.selectedNode.children ? this.selectedNode.children : [];
    }
  },
  mounted() {
    this.reset();
  },
  methods: {
    handleClick(node, index) {
      this.isSelected = true;
      this.selectedNode = node;
      this.selectedIndex = index;
      this.childrenShow = true;
      this.$set(this.selectNode, this.level - 1, node);
      this.childrenOptions.length === 0 && this.onClose();
    },
    reset() {
      this.childrenShow = false;
      this.selectedNode = null;
      this.isSelected = false;
      this.selectedIndex = null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "./styles";
.popover-container {
  display: flex;
  flex-wrap: nowrap;
  line-height: $line-height-lg;
  font-size: $font-size-base;
  .current-wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-y: auto;
    .popover-item {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.2s linear;
      &:hover {
        background: $gray-200;
      }
      &.active {
        background: $gray-200;
      }
      .popover-label {
        padding: 0 20px;
        white-space: nowrap;
      }
      .cascader-icon {
        padding: 0 10px 0 20px;
      }
    }
  }
}
</style>
