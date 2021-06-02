<template>
  <div
    v-if="activated"
    class="zombie-tabs-pane"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZombieTabsPane",
  inject: ["eventBus"],
  props: {
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
};
</script>

<style></style>
