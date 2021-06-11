<template>
  <div id="app">
    <z-input v-model="inputVal" />
  </div>
</template>

<script>
import ZInput from "./stories/Input";

export default {
  name: "App",
  components: {
    ZInput,
  },
  data() {
    return {
      inputVal:''
    };
  },
  methods: {},
};
</script>
