<template>
  <div class="zombie-menu">
    <slot />
  </div>
</template>

<script>

export default {
  name: "ZombieMenu",
  model: {
    prop: 'selected',
    event: 'changeSelect'
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    items() {
      return this.$children.filter(vm => vm.$options.name === "ZombieMenuItem")
    }
  },
  mounted() {
    this.updateChildren()
    this.listenToChildren()
  },
  updated() {
    this.updateChildren()
  },
  methods: {
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected.indexOf(vm.name) >= 0;
      })
    },
    listenToChildren(){
      this.items.forEach(vm => {
        vm.$on('add:selected', (name) => {
          if (this.multiline) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected))
              copy.push(name)
              this.$emit('changeSelect', copy)
            }
          } else {
            this.$emit('changeSelect', [name])
          }
        })
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.zombie-menu {
  display: flex;
  border: 1px solid red;
}
</style>
