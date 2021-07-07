<template>
  <div class="zombie-cascader">
    <div class="trigger">
      <z-input
        ref="trigger"
        style="width:400px"
        @onFocus="handleClick"
      />
    </div>
    <z-cascader-item
      v-if="show"
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
      popoverTop: 0
    }
  },
  computed: {
    popoverTopStyle() {
      return this.popoverTop + 'px'
    }
  },
  methods: {
    handleClick() {
      let nodeStyle = this.$refs.trigger.$el.getBoundingClientRect()
      this.popoverTop = nodeStyle.height
      this.show = !this.show
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./styles";

.zombie-cascader {
  position: relative;

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
