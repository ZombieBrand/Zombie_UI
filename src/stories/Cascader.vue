<template>
  <div
    ref="cascader"
    class="zombie-cascader"
  >
    <div
      class="trigger"
      @click="handleClick($event)"
    >
      <z-input
        ref="trigger"
        :value="selectLabel"
        :readonly="true"
        :loading="loading"  
      >
        <template v-slot:suffix>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-chevron-right"
            :class="{ 'icon-open': show }"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#343a40"
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
        </template>
      </z-input>
    </div>
    <z-cascader-item
      v-if="show"
      :show="show"
      :level="level + 1"
      :child-data="options"
      :style="{ top: popoverTopStyle }"
      class="popover"
    />
  </div>
</template>

<script>
import ZCascaderItem from "@/stories/CascaderItem";
import ZInput from "@/stories/Input";

export default {
  name: "ZombieCascader",
  components: {
    ZCascaderItem,
    ZInput,
  },
  model: {
    prop: "value",
    event: "selected",
  },
  props: {
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    value: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
      popoverTop: 0,
      level: 0,
      selectNode: [],
    };
  },
  computed: {
    popoverTopStyle() {
      return this.popoverTop + "px";
    },
    selectLabel() {
      let selectedArr = this.selectNode.map((item) => {
        return { label: item.label, value: item.value };
      });
      this.$emit("selected", selectedArr);
      return selectedArr
        .map((item) => {
          return item.label;
        })
        .join(">");
    },
  },
  provide() {
    return {
      onClose: this.onClose,
      selectNode: this.selectNode,
    };
  },
  methods: {
    handleClick() {
      console.log(1)
      let nodeStyle = this.$refs.trigger.$el.getBoundingClientRect();
      this.popoverTop = nodeStyle.height;
      if (this.show) {
        this.onClose();
      } else {
        this.onOpen();
      }
    },
    // 添加关闭监听
    listenToDocument() {
      document.addEventListener("click", this.eventHandle);
    },
    eventHandle(evt) {
      this.$nextTick(() => {
        let target = evt.target;
        let contain = this.$refs.cascader;
        !contain.contains(target) && this.onClose();
      });
    },
    onClose() {
      this.show = false;
      document.removeEventListener("click", this.eventHandle);
    },
    onOpen() {
      this.show = true;
      this.listenToDocument();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles";

.zombie-cascader {
  position: relative;
  display: inline-block;
  .trigger {
    display: inline-block;
    width: 100%;
    .icon-tabler-chevron-right {
      transition: transform 0.3s;
      transform: rotate(0);
      &.icon-open {
        transition: transform 0.3s;
        transform: rotate(90deg);
      }
    }
  }
  .popover {
    position: absolute;
    left: 0;
    box-shadow: $box-shadow;
    border-radius: $border-radius;
    background: $white;
    overflow: hidden;
    max-height: 300px;
  }
}
</style>
