<template>
  <div id="app">
    <z-input v-model="inputVal" />
    <z-popover
      style="margin:500px"
    >
      <template #content>
        popover-content popover-content popover-content popover-content popover-content popover-content
        <z-button @click="popClose">
          关闭
        </z-button>
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
      popover: false
    };
  },
  methods: {
    clickPopover() {},
    popClose(){
      this.popover = false
    }
  },
};
</script>
