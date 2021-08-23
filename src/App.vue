<template>
  <div id="app">
    <z-menu
      v-model="selected"
      multiline
    >
      <z-menu-item name="home">
        首页
      </z-menu-item>
      <z-menu-item name="about">
        关于
      </z-menu-item>
      <z-menu-item name="hire">
        招聘
      </z-menu-item>
    </z-menu>
    <z-menu
      v-model="selected2"
    >
      <z-menu-item name="home1">
        首页
      </z-menu-item>
      <z-menu-item name="about1">
        关于
      </z-menu-item>
      <z-menu-item name="hire1">
        招聘
      </z-menu-item>
    </z-menu>
  </div>
</template>

<script>
import ZMenu from "@/stories/Menu";
import ZMenuSub from "@/stories/MenuSub";
import ZMenuItem from "@/stories/MenuItem";
import Collapse from "@/stories/Collapse";
import CollapseItem from "@/stories/CollapseItem";

export default {
  name: "App",
  components: {
    ZMenu,
    ZMenuItem,
    ZMenuSub,
  },
  data() {
    return {
      selected: ['home'],
      selected2: ['about1'],
    };
  },
};
</script>
<style lang="scss" scoped></style>
