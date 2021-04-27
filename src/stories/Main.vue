<template>
  <main class="zombie-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "ZombieMain",
};
</script>

<style scoped>
.zombie-main {
  flex-grow: 1;
}
</style>
