<template>
  <div class="zombie-menu-sub">
    <div
      class="zombie-menu-sub-title"
      @click="onClick"
    >
      <slot name="title" />
    </div>
    <div
      v-if="active"
      class="zombie-menu-sub-popover"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "ZombieMenuSub",
  inject: {
    rootMenu: 'rootMenu'
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    onClick() {
      this.active = !this.active
      this.$nextTick(() => {
        this.rootMenu.listenToChildren()
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.zombie-menu-sub {
  position: relative;
  cursor: pointer;

  &-title {
    padding: 10px 20px;
    text-align: center;
    white-space: nowrap;
  }

  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid black;
  }

  .zombie-menu-sub .zombie-menu-sub-popover {
    position: absolute;
    top: 0;
    left: 100%;
  }
}
</style>
