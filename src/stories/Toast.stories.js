import Toast from "./Toast";
export default {
  title: "Example/Toast",
  parameters: {
    docs: {
      description: {
        component: "提示信息组件",
      },
    },
  },
  argTypes: {
    position: {
      description: "显示位置",
      options: ["top", "middle", "bottom"],
      control: {
        type: "select",
        labels: {
          top: "top",
          middle: "middle",
          bottom: "bottom",
        },
      },
    },
  },
  component: Toast,
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { Toast },
    template: "<Toast v-bind='$props'>Toast组件</Toast>",
  };
};

export const Primary = Template.bind({});
Primary.args = {
  autoCloseDelay: 0,
  enableHtml: false,
  position: "top",
  closeButton: {
    text: "关闭",
    callback() {
      console.log("已经触发了Toast");
    },
  },
};

export const Programmatic = Template.bind({});

Programmatic.parameters = {
  docs: {
    description: {
      story:
        "Zombie UI 为Vue.prototype 添加了全局方法 $toast。因此在 vue instance 中可以采用本页面中的方式调用 Toast。",
    },
    source: {
      code: `
        // main.js
        import Vue from "vue";
        import plugin from "./plugin";
        Vue.use(plugin);

//xxx.vue
        this.$toast('我是toast',{
        position: 'bottom',
        enableHtml: true,
        closeButton: {
          text: '关闭',
          callback() {
            console.log('已经触发了Toast');
          },
        },
        autoCloseDelay: 1,
      });
      `,
    },
  },
};
