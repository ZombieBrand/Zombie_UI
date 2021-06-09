<template>
  <div
    ref="tabsItem"
    class="zombie-tabs-item"
    :class="classes"
    @click="handleActivated()"
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
        disabled: this.disabled
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
      if(this.disabled)return
      this.eventBus.$emit("update:activated", this.name);
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
  position: relative;
  &.active {
    color: $primary;
  }
  &.active:after{
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  &:after{
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &.disabled{
    color: $gray-500;
    cursor: not-allowed;
  }
}
</style>
