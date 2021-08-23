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
      collapseItem: [],
    };
  },
  watch: {
    selected: {
      handler(val) {
        this.getItemsVm().forEach((item) => {
          item.selected = val;
        });
      },
    },
    accordion: {
      handler(val) {
        this.getItemsVm().forEach((item) => {
          item.accordion = val;
        });
      },
    },
  },
  mounted() {
    this.getItemsVm().forEach((item) => {
      item.selected = this.selected;
      item.accordion = this.accordion;
    });
  },
  methods: {
    changeSelect(name) {
      this.$emit("changeSelect", name);
    },
    getItemsVm() {
      return this.$children.filter(
          (vm) => vm.$options.name === "ZombieCollapseItem"
      );
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

<style lang="scss" scoped></style>
