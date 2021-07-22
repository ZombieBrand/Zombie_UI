<template>
  <div class="zombie-collapse">
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
import {mutations} from "@/stories/store/collapse";

export default {
  name: "ZombieCollapse",
  model: {
    prop: "selected",
    event: "changeSelect",
  },
  props: {
    /**
     * 是否只允许展开一个面板
     */
    accordion: {
      type: Boolean,
      default: false,
    },
    /**
     * 选中展开name
     */
    selected: {
      type: [String, Array],
      default: "",
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  watch:{
    selected:{
      handler(val){
        mutations.setSelected(val)
      },
      immediate:true
    },
    accordion:{
      handler(val){
        mutations.setAccordion(val)
      },
      immediate:true
    },
  },
  methods: {
    changeSelect(name) {
      this.$emit("changeSelect", name);
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
      changeSelect: this.changeSelect,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
