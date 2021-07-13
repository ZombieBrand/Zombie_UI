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
import ZCascaderItem from "./CascaderItem";
import ZInput from "./Input";

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
    /**
     * 填充的 options 数据
     */
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    /**
     *  绑定的值value
     */
    value: {
      type: Array,
      default: () => [],
    },
    /**
     * 在点击未加载完成节点时的回调，在返回的 promise 中设定 option.children，在返回的 promise resolve 或 reject 之后完成加载
     * 需要remote是true有效
     */
    onLoad:{
      type:Function,
      default: undefined
    },
    /**
     * 是否远程获取数据
     */
    remote:{
      type:Boolean,
      default:false
    },
    /**
     * 设置分隔符
     */
    separator:{
      type:String,
      default:'/'
    }
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
        .join(` ${this.separator} `);
    },
  },
  provide() {
    return {
      onClose: this.onClose,
      selectNode: this.selectNode,
      remote:this.remote,
      onLoad:this.onLoad
    };
  },
  methods: {
    handleClick() {
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
    z-index: 1;
    filter: drop-shadow(2px 2px 6px rgba(0,0,0,.3));
    border-radius: $border-radius;
    background: $white;
    overflow: hidden;
    max-height: 300px;
  }
}
</style>
