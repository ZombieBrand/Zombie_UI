<template>
  <div id="app">
    <z-input v-model="inputVal" />
    <z-popover>
      <template #content>
        <p>popover-content</p>
        <p>popover-content</p>
      </template>
      <z-button> popover </z-button>
    </z-popover>
  </div>
</template>

<script>
import ZInput from "./stories/Input";
import ZPopover from "./stories/Popover";
import ZButton from "./stories/Button";
export default {
  name: "App",
  components: {
    ZInput,
    ZPopover,
    ZButton,
  },
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    clickPopover() {},
  },
};
</script>
