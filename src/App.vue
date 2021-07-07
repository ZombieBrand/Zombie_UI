<template>
  <div id="app">
    <z-cascader
      :options="dataOptions"
      @onChange="onChange"
    />
  </div>
</template>

<script>
import ZCascader from './stories/Cascader'
export default {
  name: "App",
  components: {
    ZCascader
  },
  data() {
    return {
      inputVal: "",
      active:['1','3'],
      dataOptions:[{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      },{
        value:'ceshi',
        label:'测试'
      }]
    };
  },
  methods: {
    onChange(){

    }
  },
};
</script>
