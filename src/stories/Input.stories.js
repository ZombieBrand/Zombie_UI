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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZInput, Home },
  template: "<z-input></z-input>",
});

export const Primary = Template.bind({});
Primary.args = {
  size: "medium",
};
