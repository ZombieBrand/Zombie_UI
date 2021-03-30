import ZButtonGroup from "./ButtonGroup.vue";
import ZButton from "./Button.vue";
import { ArrowLeft, ArrowRight } from "@icon-park/vue";

export default {
  components: ZButtonGroup,
  title: "Example/ButtonGroup",
  parameters: {
    docs: {
      description: {
        component: "基础按钮组",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ZButtonGroup, ZButton, ArrowLeft, ArrowRight },
  props: Object.keys(argTypes),
  template:
    '<z-button-group v-bind="$props">' +
    '<z-button v-bind="$props"><arrow-left theme="outline" size="1em" fill="#333"/>上一页</z-button>' +
    '<z-button v-bind="$props" label="更多"></z-button>' +
    '<z-button v-bind="$props">下一页<arrow-right theme="outline" size="1em" fill="#333"/></z-button>' +
    "</z-button-group>",
});

export const Primary = Template.bind({});
