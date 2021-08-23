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
  methods:{
    onClickItem(){
      this.$emit('add:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
  .zombie-menu-item{
    padding: 10px;
    &.active{
      background: red;
    }
  }
</style>
