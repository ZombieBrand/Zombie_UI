<template>
  <div class="zombie-tabs">
    <slot />
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "ZombieTabs",
  props: {
    activated: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "top",
      validator: (value) => {
        return ["top", "right", "bottom", "left"].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  mounted() {
    this.eventBus.$emit("update:activated", this.activated);
  },
};
</script>
<style scoped lang="scss">
.zombie-tabs {
  min-height: 40px;
}
</style>
