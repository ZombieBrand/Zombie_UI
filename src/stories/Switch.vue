<template>
  <div>
    <input
      id="toggle"
      :checked="checked"
      class="offscreen"
      type="checkbox"
      @change="onChange($event)"
    >
    <label
      class="switch"
      for="toggle"
      :style="{ backgroundColor: checked ? activeColor : inactiveColor }"
    ><span class="switch-label">
      {{ checked ? activeText : inactiveText }}
    </span></label>
  </div>
</template>

<script>
export default {
  name: "ZombieSwitch",
  model: {
    prop: "checked",
    event: "onChange",
  },
  props: {
    /**
     * 绑定值
     */
    checked: {
      type: Boolean,
      default: false,
    },
    /**
     * 	switch 打开时的文字描述
     */
    activeText: {
      type: String,
      default: "",
    },
    /**
     * 	switch 关闭时的文字描述
     */
    inactiveText: {
      type: String,
      default: "",
    },
    /**
     * 	switch 打开时的背景色
     */
    activeColor: {
      type: String,
      default: "#6f8a79",
    },
    /**
     * 	switch 关闭时的背景色
     */
    inactiveColor: {
      type: String,
      default: "#bfbfbf",
    },
  },
  methods: {
    onChange(event) {
      this.$emit("onChange", event.target.checked);
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  transition: all 0.3s;
}

.switch:after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input[type="checkbox"]:checked + .switch:after {
  transform: translateX(20px);
}

input[type="checkbox"]:checked + .switch {
  background-color: #6f8a79;
}

.offscreen {
  position: absolute;
  left: -9999px;
}
.switch-label {
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 100%;
  line-height: initial;
}
</style>
