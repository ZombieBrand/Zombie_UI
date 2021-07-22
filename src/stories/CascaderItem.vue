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
          v-show="item.children && item.children.length > 0 && !loading"
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
        <div
          v-show="loading && index === selectedIndex"
          class="loading"
        />
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
import {store} from "@/stories/store/cascader"
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
    },
  },
  inject: ["onClose", "selectNode","onLoad"],
  data() {
    return {
      childrenShow: false,
      selectedNode: null,
      isSelected: false,
      selectedIndex: null,
      loading: false
    };
  },
  computed: {
    childrenOptions() {
      return this.selectedNode.children ? this.selectedNode.children : [];
    },
    remote(){
      return store.remote
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
      this.$set(this.selectNode, this.level - 1, node);
      if(this.remote === false){
        this.childrenShow = true;
        this.childrenOptions.length === 0 && this.onClose();
      }else{
        this.loading = true
        this.childrenShow = false
        this.$delete(node,'children')
        this.onLoad(node).finally(()=>{
          this.loading = false
          this.childrenShow = true
          this.childrenOptions.length === 0 && this.onClose();
        })
      }
    },
    reset() {
      this.childrenShow = false;
      this.selectedNode = null;
      this.isSelected = false;
      this.selectedIndex = null;
      this.loading = false
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
      padding-left:10px;
      padding-right: 4px;
      &:hover {
        background: $gray-200;
      }
      &.active {
        background: $gray-200;
      }
      .popover-label {
        padding-right:30px;
        white-space: nowrap;
      }
      .cascader-icon {
      }
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
    }
  }
}
</style>
