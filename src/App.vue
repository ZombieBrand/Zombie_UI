<template>
  <div id="app">
    <z-input v-model="inputVal" />
    <z-button @onClick="handleClick">
      popover2
    </z-button>
  </div>
</template>

<script>
import ZInput from "./stories/Input";
import ZButton from "./stories/Button";
export default {
  name: "App",
  components: {
    ZInput,
    ZButton,
  },
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    handleClick(){
      
    }
  },
};
</script>
