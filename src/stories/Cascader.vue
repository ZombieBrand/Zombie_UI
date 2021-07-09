<template>
  <div
    ref="cascader"
    class="zombie-cascader"
  >
    <div class="trigger">
      <z-input
        ref="trigger"
        style="width:400px"
        :value="selectLabel"
        :readonly="true"
        @onFocus="handleClick($event)"
      />
    </div>
    <z-cascader-item
      v-if="show"
      :level="level + 1"
      :child-data="options"
      :style="{top:popoverTopStyle}"
      class="popover"
    />
  </div>
</template>

<script>
import ZCascaderItem from "@/stories/CascaderItem";
import ZInput from '@/stories/Input'

export default {
  name: "ZombieCascader",
  components: {
    ZCascaderItem,
    ZInput
  },
  props: {
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      show: false,
      popoverTop: 0,
      level: 0,
      selectNode:[],
    }
  },
  computed: {
    popoverTopStyle() {
      return this.popoverTop + 'px'
    },
    selectLabel(){
      let labelArr = this.selectNode.map(item=>{
        return item.label
      })
      return labelArr.join('>')
    }
  },
  provide(){
    return {
      onClose:this.onClose,
      selectNode:this.selectNode
    }
  },
  methods: {
    handleClick() {
      let nodeStyle = this.$refs.trigger.$el.getBoundingClientRect()
      this.popoverTop = nodeStyle.height
      if (this.show) {
        this.onClose()
      } else {
        this.onOpen()
      }
    },
    // 添加关闭监听
    listenToDocument() {
      document.addEventListener("click", this.eventHandle);
    },
    eventHandle(evt) {
      this.$nextTick(() => {
        let target = evt.target
        let contain = this.$refs.cascader
        !contain.contains(target) && this.onClose()
      })
    },
    onClose() {
      this.show = false
      document.removeEventListener("click", this.eventHandle);
    },
    onOpen() {
      this.show = true
      this.listenToDocument()
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles";

.zombie-cascader {
  position: relative;
  .trigger{
    display: inline-block;
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
