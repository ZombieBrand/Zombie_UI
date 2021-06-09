import ZTabs from "./Tabs";
import ZTabsBody from "./TabsBody";
import ZTabsHead from "./TabsHead";
import ZTabsItem from "./TabsItem";
import ZTabsPane from "./TabsPane";
export default {
  title: "Example/Tabs",
  component: ZTabs,
  argTypes: {
    position: {
      description: "选项卡所在位置",
      options: ["top", "right", "bottom", "left"],
      control: {
        type: "select",
        labels: {
          top: "top",
          left: "left",
          right: "right",
          bottom:"bottom"
        },
      },
    },
  },
};
const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { ZTabs, ZTabsBody, ZTabsHead, ZTabsItem, ZTabsPane },
    template:
      "<z-tabs  v-bind:activated='activated' v-bind:position='position'>" +
      " <z-tabs-head>" +
      "   <template slot='actions'>设置</template>" +
      "   <z-tabs-item name='first'>用户管理</z-tabs-item>" +
      "   <z-tabs-item name='second' v-bind:disabled='true'>配置管理</z-tabs-item>" +
      "   <z-tabs-item name='third'>权限管理</z-tabs-item>" +
      " </z-tabs-head>" +
      " <z-tabs-body>" +
      "   <z-tabs-pane name='first'>用户管理</z-tabs-pane>" +
      "   <z-tabs-pane name='second'>配置管理</z-tabs-pane>" +
      "   <z-tabs-pane name='third'>权限管理</z-tabs-pane>" +
      " </z-tabs-body>" +
      "</z-tabs>",
  };
};
export const Primary = Template.bind({});
Primary.args = {
  position:'top',
  activated:'first'
};
