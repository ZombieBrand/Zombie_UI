<template>
  <div id="app">
    <z-collapse
      v-model="active"
      :accordion="false"
    >
      <z-collapse-item
        title="标签1"
        name="1"
      >
        1
      </z-collapse-item>
      <z-collapse-item
        title="标签2"
        name="2"
      >
        2
      </z-collapse-item>
      <z-collapse-item
        title="标签3"
        name="3"
      >
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
      active:['1','3']
    };
  },
  methods: {
    handleClick(){

    }
  },
};
</script>
