import ZRow from "./Row";
import ZCol from "./Col";

export default {
  components: ZRow,
  title: "Example/Layout",
  parameters: {
    docs: {
      description: {
        component: "基础格栅",
      },
    },
  },
  argTypes: {
    span: {
      description: "栅格占据的列数",
      table: {
        category: "Col Props",
        defaultValue: {
          summary: "24",
        },
      },
    },
    offset: {
      description: "栅格左侧的间隔格数",
      table: {
        category: "Col Props",
        defaultValue: {
          summary: "0",
        },
      },
    },
    gutter: {
      description: "栅格间隔",
      table: {
        category: "Row Props",
        defaultValue: {
          summary: "0",
        },
      },
    },
    type: {
      description: "布局模式，可选 flex，现代浏览器下有效",
      table: {
        category: "Row Props",
        defaultValue: {
          summary: "",
        },
      },
    },
    justify: {
      description: "flex 布局下的水平排列方式",
      table: {
        category: "Row Props",
        defaultValue: {
          summary: "start",
        },
      },
      control: {
        type: "select",
        options: ["start", "end", "center", "space-around", "space-between"],
      },
    },
    align: {
      description: "flex 布局下的垂直排列方式",
      table: {
        category: "Row Props",
        defaultValue: {
          summary: "top",
        },
      },
      control: {
        type: "select",
        options: ["top", "middle", "bottom"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { ZRow, ZCol },
  props: Object.keys(argTypes),
  template:
    "<div style='width:800px;background:#E5E6D8;margin: 0 auto'>" +
    '<z-row style="height:60px;" :gutter="gutter" :type="type" :align="align" :justify="justify">' +
    '<z-col :span="span"><div style="background:#5F192C;height:40px"></div></z-col>' +
    '<z-col :span="span" :offset="offset"><div style="background:#80223C;height:40px"></div></z-col>' +
    '<z-col :span="span" :offset="offset"><div style="background:#AA2E51;height:40px"></div></z-col>' +
    "</z-row>" +
    "</div>",
});

export const Primary = Template.bind({});
Primary.args = {
  span: 6,
  offset: 1,
  gutter: 20,
  type: "flex",
  align: "top",
  justify: "start",
};

const ResponsiveTemplate = (args, { argTypes }) => ({
  components: { ZRow, ZCol },
  props: Object.keys(argTypes),
  template:
    "<div style='width:800px;background:#E5E6D8;margin: 0 auto'>" +
    '<z-row style="height:60px;" :gutter="gutter" :type="type">' +
    '<z-col :phone="{span:8}" :ipad="{span:6}" :narrow-pc="{span:4}" :pc="{span:3}" :wide-pc="{span:1,offset:1}"><div style="background:#5F192C;height:40px"></div></z-col>' +
    '<z-col :phone="{span:4}" :ipad="{span:6}" :narrow-pc="{span:8}" :pc="{span:9}" :wide-pc="{span:10}"><div style="background:#80223C;height:40px"></div></z-col>' +
    '<z-col :phone="{span:4}" :ipad="{span:6}" :narrow-pc="{span:8}" :pc="{span:9}" :wide-pc="{span:10}"><div style="background:#80223C;height:40px"></div></z-col>' +
    '<z-col :phone="{span:8}" :ipad="{span:6}" :narrow-pc="{span:4}" :pc="{span:3}" :wide-pc="{span:1,offset:1}"><div style="background:#AA2E51;height:40px"></div></z-col>' +
    "</z-row>" +
    "</div>",
});

export const Responsive = ResponsiveTemplate.bind({});
Responsive.args = {
  gutter: 20,
  type: "flex",
  align: "top",
  justify: "start",
};
