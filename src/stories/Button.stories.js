import ZButton from "./Button";
import { Home } from "@icon-park/vue";

export default {
  title: "Example/Button",
  parameters: {
    docs: {
      description: {
        component: "常用的操作按钮",
      },
    },
  },
  component: ZButton,
  argTypes: {
    type: {
      options: ["primary", "success", "info", "warning", "danger", false],
      control: {
        type: "select",
        labels: {
          primary: "primary",
          success: "success",
          info: "info",
          warning: "warning",
          danger: "danger",
          default: false,
        },
      },
    },
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "select",
        labels: {
          small: "small",
          medium: "medium",
          large: "large",
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZButton, Home },
  template:
    "<div>" +
    '<z-button @onClick="onClick" v-bind="$props" />' +
    '<z-button @onClick="onClick" v-bind="$props"><home theme="outline" style="vertical-align: baseline"/></z-button>' +
    "</div>",
});

export const Primary = Template.bind({});
Primary.args = {
  type: false,
  label: "Button",
  round: true,
};

const IconTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZButton, Home },
  template:
    '<z-button @onClick="onClick" v-bind="$props"><home theme="outline" style="vertical-align: baseline"/></z-button>',
});

export const Icon = IconTemplate.bind({});
Icon.args = {
  size: "medium",
  type: "danger",
  circle: true,
};
Icon.parameters = {
  docs: {
    description: {
      story: "示例 Icon 并非内置",
    },
  },
};

const SlotTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZButton, Home },
  template:
    '<z-button @onClick="onClick" :round="true"><home theme="outline" style="vertical-align: text-bottom;"/><span>Slot</span></z-button>',
});

export const Slot = SlotTemplate.bind({});

Slot.parameters = {
  docs: {
    description: {
      story: "示例 Slot 用法",
    },
  },
};
