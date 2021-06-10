<template>
  <div
    ref="tabsItem"
    class="zombie-tabs-item"
    :data-name="name"
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
      position:'top'
    };
  },
  computed: {
    classes() {
      return [{ active: this.activated, disabled: this.disabled },`layout-${this.position}`];
    },
  },
  created() {
    this.eventBus.$on("update:activated", (name) => {
      this.activated = name === this.name;
    });
    this.eventBus.$on('position',(position)=>{
      this.position = position
    })
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
$tab-height: 40px;
.zombie-tabs-item {
  cursor: pointer;
  height:$tab-height;
  padding: 0 1em;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 0.3s;
  position: relative;
  &.active {
    color: $primary;
  }
  &:after{
    content: '';
    position: absolute;
    background-color: $primary;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &.disabled{
    color: $gray-500;
    cursor: not-allowed;
  }
  &.layout-top{
    &:after{
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
    }
    &.active:after{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
  &.layout-left{
    &:after{
      width: 2px;
      height: 100%;
      top: 0;
      right: 0;
      transform: scaleY(0);
    }
    &.active:after{
      transform: scaleY(1);
      transform-origin: top right;
    }
  }
  &.layout-right{
    &:after{
      width: 2px;
      height: 100%;
      top: 0;
      left: 0;
      transform: scaleY(0);
    }
    &.active:after{
      transform: scaleY(1);
      transform-origin: top left;
    }
  }
  &.layout-bottom{
    &:after{
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
    }
    &.active:after{
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}
</style>
