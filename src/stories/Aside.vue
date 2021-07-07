<template>
  <aside
    class="zombie-aside"
    :style="{ width: collapsibleWidth }"
  >
    <slot />
    <div
      v-if="collapsible !== undefined"
      class="collapsible-button"
      @click="toggleCollapsible"
    >
      {{ collapsible ? "《" : "》" }}
    </div>
  </aside>
</template>

<script>
export default {
  name: "ZombieAside",
  props: {
    width: {
      type: Number,
      default: 200,
    },
    collapsible: {
      type: [Boolean,undefined],
      default: undefined,
    },
  },
  computed: {
    collapsibleWidth() {
      return this.collapsible ? "80px" : this.width + "px";
    },
  },
  methods: {
    toggleCollapsible() {
      this.$emit('update:collapsible',!this.collapsible)
    },
  },
};
</script>

<style lang="scss" scoped>
.zombie-aside {
  position: relative;
  transition: width 0.3s ease-in;
  .collapsible-button {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
