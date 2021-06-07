import ZTabs from "./Tabs";
import ZTabsBody from "./TabsBody";
import ZTabsHead from "./TabsHead";
import ZTabsItem from "./TabsItem";
import ZTabsPane from "./TabsPane";
export default {
  title: "Example/Tabs",
  component: ZTabs,
};
const Template = (args, { argTypes }) => {
  delete argTypes["v-model"];
  return {
    props: Object.keys(argTypes),
    components: { ZTabs, ZTabsBody, ZTabsHead, ZTabsItem, ZTabsPane },
    data() {
      return {
        active: this.selected,
      };
    },
    template:
      "<z-tabs :activated.sync='first'>" +
      " <z-tabs-head>" +
      "   <template slot='actions'>设置</template>" +
      "   <z-tabs-item name='first'>用户管理</z-tabs-item>" +
      "   <z-tabs-item name='second'>配置管理</z-tabs-item>" +
      " </z-tabs-head>" +
      " <z-tabs-body>" +
      "   <z-tabs-pane name='first'>用户管理</z-tabs-pane>" +
      "   <z-tabs-pane name='second'>配置管理</z-tabs-pane>" +
      " </z-tabs-body>" +
      "</z-tabs>",
  };
};
export const Primary = Template.bind({});
Primary.args = {
  selected: "second",
};
