import ZPopover from "./Popover";
import ZButton from "./Button";
export default {
  title: "Example/Popover",
  parameters: {
    docs: {
      description: {
        component: "弹出框",
      },
    },
  },
  argTypes: {
    position: {
      options: ["top", "left", "right", "bottom"],
      control: {
        type: "select",
        labels: {
          top: "top",
          left: "left",
          right: "right",
          bottom: "bottom",
        },
      },
    },
    trigger: {
      options: ["click", "hover"],
      control: {
        type: "select",
        labels: {
          click: "click",
          hover: "hover",
        },
      },
    },
  },
  component: ZPopover,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ZPopover, ZButton },
  template:
    "<div>" +
    '<z-popover v-bind="$props"><template #content>这是一段内容,这是一段内容,这是一段内容,这是一段内容。</template><z-button>popover</z-button></z-popover>' +
    "</div>",
});

export const Primary = Template.bind({});
Primary.args = {
  maxWidth: 400,
  position: "top",
  popperClass: "custom-class",
  trigger: "click",
};
