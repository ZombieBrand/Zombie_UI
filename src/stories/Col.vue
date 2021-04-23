<template>
  <div class="zombie-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
const validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "ZombieCol",
  props: {
    /**
     * 栅格占据的列数
     */
    span: {
      type: [Number, String],
      default: 24,
    },
    /**
     * 栅格左侧的间隔格数
     */
    offset: {
      type: [Number, String],
      default: 0,
    },
    phone: {
      type: Object,
      default: null,
      validator,
    },
    ipad: {
      type: Object,
      default: null,
      validator,
    },
    narrowPc: {
      type: Object,
      default: null,
      validator,
    },
    pc: {
      type: Object,
      default: null,
      validator,
    },
    widePc: {
      type: Object,
      default: null,
      validator,
    },
  },
  data() {
    return {
      /**
       * 间隙
       */
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: `${this.gutter / 2}px`,
        paddingRight: `${this.gutter / 2}px`,
      };
    },
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      return [
        `col-${span}`,
        offset && `offset-${offset}`,
        ...this.createClasses("phone", phone),
        ...this.createClasses("ipad", ipad),
        ...this.createClasses("narrowPc", narrowPc),
        ...this.createClasses("pc", pc),
        ...this.createClasses("widePc", widePc),
      ];
    },
  },
  methods: {
    createClasses(name, object) {
      if (!object) return [];
      let formatName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
      let arr = [];
      object.span && arr.push(`col-${formatName}-${object.span}`);
      object.offset && arr.push(`offset-${formatName}-${object.offset}`);
      return arr;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "./col.scss"
</style>
