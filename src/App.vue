<template>
  <div id="app">
    <z-button label="button" background-color="primary" primary></z-button>
    <z-switch v-model="switchVal"></z-switch>
    <z-input v-model="inputVal"></z-input>
  </div>
</template>

<script>
import ZButton from "./stories/Button";
import ZInput from "./stories/Input";
import ZSwitch from "./stories/Switch";
export default {
  name: "App",
  components: {
    ZButton,
    ZInput,
    ZSwitch,
  },
  data() {
    return {
      switchVal: false,
      inputVal: "测试",
    };
  },
};
</script>
