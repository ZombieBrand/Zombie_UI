import ZSwitch from "./Switch";

export default {
  title: "Example/Switch",
  parameters: {
    docs: {
      description: {
        component: "常用开关组件,请使用下方配置功能配置组件",
      },
    },
  },
  component: ZSwitch,
  argTypes: {
    checked: {
      name: "checked/v-model",
      description: "绑定值",
      table: {
        category: "props",
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean",
        },
      },
    },
    onChange: {
      description: "switch 状态发生变化时的回调函数",
      table: {
        defaultValue: {
          summary: "event.target.checked",
        },
      },
    },
    activeColor: {
      control: "color",
    },
    inactiveColor: {
      control: "color",
    },
  },
};

const Template = (args, { argTypes }) => {
  delete argTypes["v-model"];
  return {
    props: Object.keys(argTypes),
    components: { ZSwitch },
    template: "<z-switch @onChange='onChange' v-bind='$props'></z-switch>",
  };
};

export const Primary = Template.bind({});
Primary.args = {
  checked: false,
  activeText: "开启",
  inactiveText: "关闭",
};
