<template>
  <div class="zombie-collapse">
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
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
  methods: {
    changeSelect(name) {
      this.$emit("changeSelect", name);
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
      changeSelect: this.changeSelect,
      activeName: this.selected,
      accordion: this.accordion,
    };
  },
};
</script>

<style scoped lang="scss">
</style>
