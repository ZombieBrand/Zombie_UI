<template>
  <aside class="zombie-aside" :style="{ width: collapsibleWidth }">
    <slot></slot>
    <div
      v-if="collapsible"
      class="collapsible-button"
      @click="toggleCollapsible"
    >
      {{ collapsible ? "<" : ">" }}
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
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsibleStatus: false,
    };
  },
  computed: {
    collapsibleWidth() {
      return this.collapsibleStatus ? "80px" : this.width + "px";
    },
  },
  methods: {
    toggleCollapsible() {
      this.collapsibleStatus = !this.collapsibleStatus;
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
