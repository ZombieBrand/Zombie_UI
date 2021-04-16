import ZInput from "./Input";
import { Home } from "@icon-park/vue";
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
      description: "在输入框失去焦点触发",
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
  return {
    props: Object.keys(argTypes),
    components: { ZInput, Home },
    template:
      "<z-input  @onChange='onChange' @onInput='onInput' @onFocus='onFocus' @onBlur='onBlur' v-bind='$props' style='width:300px'></z-input>",
  };
};

export const Primary = Template.bind({});
