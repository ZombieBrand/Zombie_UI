<template>
  <div class="zombie-menu">
    <slot />
  </div>
</template>

<script>

export default {
  name: "ZombieMenu",
  provide() {
    return {
      rootMenu: this
    }
  },
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
    return {
      items: []
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
    /**
     * @description 改变子组件信息
     * @param vm
     */
    changeItem(vm) {
      let _findIndex = this.items.findIndex(item=>{
        return item.name === vm.name
      })
      if(_findIndex >= 0){
        this.items.splice(_findIndex,1)
        this.updateChildren()
      }else{
        this.items.push(vm)
      }
    },
    /**
     * @description 更新子组件selected信息
     */
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected.indexOf(vm.name) >= 0;
      })
    },
    /**
     * @description 遍历添加监听事件
     */
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$off('change:selected', this.changeSelect)
        vm.$on('change:selected', this.changeSelect)
      })
    },
    /**
     * @description 根据name通知改变选择的组件
     * @param name
     */
    changeSelect(name) {
        let _findIndex = this.selected.findIndex( item =>{
          return item === name
        })
        if (_findIndex < 0) {
          this.selected.push(name)
          this.multiline ? this.$emit('changeSelect', this.selected) : this.$emit('changeSelect', [name])
        }else{
          this.selected.splice(_findIndex,1)
          this.$emit('changeSelect', this.selected)
        }
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
