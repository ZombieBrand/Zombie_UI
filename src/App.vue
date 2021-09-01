<template>
  <div id="app">
    <z-menu
      v-model="selected"
      multiline
    >
      <z-menu-item name="home">
        首页
      </z-menu-item>
      <z-menu-sub>
        <template #title>
          关于
        </template>
        <z-menu-item name="LivingRoom">
          客厅
        </z-menu-item>
        <z-menu-item name="bedroom">
          卧室
        </z-menu-item>
        <z-menu-sub>
          <template #title>
            测试
          </template>
          <z-menu-item name="black">
            黑盒测
          </z-menu-item>
          <z-menu-item name="white">
            白盒测
          </z-menu-item>
        </z-menu-sub>
      </z-menu-sub>
      <z-menu-item name="hire">
        招聘
      </z-menu-item>
    </z-menu>
    <z-menu
      v-model="selected2"
      style="margin-top:200px"
    >
      <z-menu-item name="home">
        首页
      </z-menu-item>
      <z-menu-sub>
        <template #title>
          关于
        </template>
        <z-menu-item name="LivingRoom">
          客厅
        </z-menu-item>
        <z-menu-item name="bedroom">
          卧室
        </z-menu-item>
      </z-menu-sub>
      <z-menu-item name="hire">
        招聘
      </z-menu-item>
      <z-menu-sub>
        <template #title>
          测试
        </template>
        <z-menu-item name="black">
          黑盒测
        </z-menu-item>
        <z-menu-item name="white">
          白盒测
        </z-menu-item>
      </z-menu-sub>
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
      selected: ["home"],
      selected2: ["about1"],
    };
  },
};
</script>
<style lang="scss" scoped></style>
