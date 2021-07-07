import ZContainer from "./Container";
import ZHeader from "./Header";
import ZMain from "./Main";
import ZFooter from "./Footer";
import ZAside from "./Aside";

export default {
  title: "Example/Container",
  component: ZContainer,
  decorators: [
    () => ({ template: '<div style="width:1000px"><story/></div>' }),
  ],
  parameters: {
    docs: {
      description: {
        component: "常用布局",
      },
    },
  },
  argTypes: {
    headerHeight: {
      name: "height",
      description: "Header高度",
      table: {
        category: "Header Props",
        defaultValue: {
          summary: "60",
        },
        type: {
          summary: "Number",
        },
      },
      control: {
        type: "number",
      },
    },
    footerHeight: {
      name: "height",
      description: "Footer高度",
      table: {
        category: "Footer Props",
        defaultValue: {
          summary: "60",
        },
        type: {
          summary: "Number",
        },
      },
      control: {
        type: "number",
      },
    },
    asideWidth: {
      name: "width",
      description: "Aside高度",
      table: {
        category: "Aside Props",
        defaultValue: {
          summary: "200",
        },
        type: {
          summary: "Number",
        },
      },
      control: {
        type: "number",
      },
    },
    collapsible: {
      name: "collapsible.sync",
      description: "侧边栏是否开启",
      table: {
        category: "Aside Props",
        defaultValue: {
          summary: "true",
        },
        type: {
          summary: "Boolean",
        },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { ZContainer, ZHeader, ZMain, ZFooter },
    template:
      "<z-container style='height:400px;min-width: 600px;color:white'><z-header style='background: #5F192D'>header</z-header><z-main style='background: #E4D5A3'>main</z-main><z-footer style='background: #6F8A79'>footer</z-footer></z-container>",
  };
};

export const Primary = Template.bind({});

const AsideTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { ZContainer, ZHeader, ZMain, ZFooter, ZAside },
    template:
      "<z-container style='height:400px;color:white'><z-header :height='headerHeight' style='background: #5F192D'>header</z-header><z-container><z-aside :width='asideWidth' style='background: #596D79'>aside</z-aside><z-main style='background: #E4D5A3'>main</z-main></z-container><z-footer :height='footerHeight' style='background: #6F8A79'>footer</z-footer></z-container>",
  };
};

export const SetSize = AsideTemplate.bind({});
SetSize.args = {
  headerHeight: 100,
  footerHeight: 100,
  asideWidth: 200,
};
SetSize.parameters = {
  docs: {
    description: {
      story: "设置大小",
    },
  },
};
const CollapsibleTemplate = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { ZContainer, ZHeader, ZMain, ZFooter, ZAside },
    template:
      "<z-container style='height:400px;color:white'><z-aside :collapsible.sync='collapsible' :width='200' style='background: #596D79'>aside</z-aside><z-container><z-header style='background: #5F192D'>header</z-header><z-main style='background: #E4D5A3'>main</z-main><z-footer style='background: #6F8A79'>footer</z-footer></z-container></z-container>",
  };
};

export const Collapsible = CollapsibleTemplate.bind({});
Collapsible.args = {
  collapsible:false,
};
