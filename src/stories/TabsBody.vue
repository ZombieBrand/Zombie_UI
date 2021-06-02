<template>
  <div class="zombie-tabs-body">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ZombieTabsBody",
  inject: ["eventBus"],
};
</script>

<style></style>
