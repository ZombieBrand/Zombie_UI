<template>
  <div id="app">
    <z-collapse>
      <z-collapse-item title="标签1">
        1
      </z-collapse-item>
      <z-collapse-item title="标签2">
        2
      </z-collapse-item>
      <z-collapse-item title="标签3">
        3
      </z-collapse-item>
    </z-collapse>
  </div>
</template>

<script>
import ZInput from "./stories/Input";
import ZButton from "./stories/Button";
import ZCollapse from './stories/Collapse'
import ZCollapseItem from './stories/CollapseItem'
export default {
  name: "App",
  components: {
    ZCollapse,
    ZCollapseItem,
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
