<template>
  <footer
    class="zombie-footer"
    :style="{ height: height + 'px' }"
  >
    <slot />
  </footer>
</template>

<script>
export default {
  name: "ZombieFooter",
  props: {
    height: {
      type: Number,
      default: 60,
    },
  },
};
</script>

<style scoped></style>
