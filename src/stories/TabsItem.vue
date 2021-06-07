<template>
  <div
    class="zombie-tabs-item"
    :class="classes"
    @click="handleActivated"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZombieTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      activated: false,
    };
  },
  computed: {
    classes() {
      return {
        active: this.activated,
      };
    },
  },
  created() {
    this.eventBus.$on("update:activated", (name) => {
      this.activated = name === this.name;
    });
  },
  methods: {
    handleActivated() {
      this.eventBus.$emit("update:activated", this.name, this);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./styles/index.scss";
.zombie-tabs-item {
  cursor: pointer;
  min-height: 100%;
  padding: 0 1em;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 0.3s;
  &.active {
    color: $primary;
  }
}
</style>
