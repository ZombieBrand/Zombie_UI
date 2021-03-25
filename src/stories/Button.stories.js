import ZButton from "./Button";
import { Home } from "@icon-park/vue";
export default {
  title: "Example/Button",
  component: ZButton,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "success", "info", "warning", "danger"],
      },
    },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZButton, Home },
  template: '<z-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  type: false,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Icon = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZButton, Home },
  template:
    '<z-button @onClick="onClick" v-bind="$props">Button<home theme="outline"/></z-button>',
});
Icon.args = {
  label: "",
};
