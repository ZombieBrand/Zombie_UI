import ZInput from "./Input";
export default {
  title: "Example/Input",
  parameters: {
    docs: {
      description: {
        component: "常用的输入框",
      },
    },
  },
  component: ZInput,
  argTypes: {
    value: {
      name: "value/v-model",
      description: "绑定值",
      table: {
        category: "props",
        defaultValue: {
          summary: "",
        },
        type: {
          summary: "string|number",
        },
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    status: {
      control: { type: "select", options: ["success", "error"] },
    },
    onBlur: {
      description: "在 Input 失去焦点时触发",
      table: {
        defaultValue: {
          summary: "event.target.value",
        },
      },
    },
    onFocus: {
      description: "在 Input 获得焦点时触发",
      table: {
        defaultValue: {
          summary: "event.target.value",
        },
      },
    },
    onChange: {
      description: "在 Input 值改变时触发",
      table: {
        defaultValue: {
          summary: "event.target.value",
        },
      },
    },
    onInput: {
      description: "在 Input 值改变时触发",
      table: {
        defaultValue: {
          summary: "event.target.value",
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  delete argTypes["v-model"];
  return {
    props: Object.keys(argTypes),
    components: { ZInput },
    template:
      "<z-input  @onChange='onChange' @onInput='onInput' @onFocus='onFocus' @onBlur='onBlur' v-bind='$props' style='width:300px'></z-input>",
  };
};

export const Primary = Template.bind({});
Primary.args = {
  value: "Zombie Ui",
};
