<template>
  <div
    class="zombie-menu-item"
    :class="{active:selected}"
    @click="onClickItem"
  >
    <slot />
  </div>
</template>

<script>

export default {
  name: "ZombieMenuItem",
  inject:{
    rootMenu:'rootMenu'
  },
  props:{
    name:{
      type:String,
      required:true,
    }
  },
  data(){
    return {
      selected:''
    }
  },
  created() {
    this.rootMenu.changeItem(this)
  },
  beforeDestroy() {
    this.rootMenu.changeItem(this)
    this.selected && this.$emit('change:selected',this.name)
  },
  methods:{
    onClickItem(){
      this.$emit('change:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
  .zombie-menu-item{
    padding: 10px;
    white-space: nowrap;
    cursor: pointer;
    &.active{
      background: red;
    }
  }
</style>
