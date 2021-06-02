<template>
  <div id="app">
    <z-button
      background-color="primary"
      label="button"
      primary
      @onClick="showToast"
    />
    <z-switch v-model="switchVal" />
    <z-input v-model="inputVal" />
    <z-tabs :activated.sync="'test1'">
      <z-tabs-head>
        <z-tabs-item name="test1">
          1
        </z-tabs-item>
      </z-tabs-head>
      <z-tabs-body>
        <z-tabs-pane name="test1">
          测试1
        </z-tabs-pane>
      </z-tabs-body>
    </z-tabs>
  </div>
</template>

<script>
import ZButton from "./stories/Button";
import ZInput from "./stories/Input";
import ZSwitch from "./stories/Switch";
import ZTabs from "./stories/Tabs";
import ZTabsBody from "./stories/TabsBody";
import ZTabsHead from "./stories/TabsHead";
import ZTabsItem from "./stories/TabsItem";
import ZTabsPane from "./stories/TabsPane";

export default {
  name: "App",
  components: {
    ZButton,
    ZInput,
    ZSwitch,
    ZTabs,
    ZTabsBody,
    ZTabsHead,
    ZTabsItem,
    ZTabsPane,
  },
  data() {
    return {
      switchVal: false,
      inputVal: "测试",
    };
  },
  methods: {},
};
</script>
