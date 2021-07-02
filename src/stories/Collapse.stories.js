import ZCollapse from "./Collapse";
import ZCollapseItem from './CollapseItem'

export default {
    title: "Example/Collapse",
    parameters: {
        docs: {
            description: {
                component: "折叠面板",
            },
        },
    },
    argTypes: {
        headerSlot: {
            name: "header",
            description: "title插槽",
            table: {
                category: "slots",
            },
        },
        defaultSlot:{
            name:'default',
            description:"内容默认插槽",
            table: {
                category: "slots",
            },
        },
        arrowSlot: {
            name: "arrow",
            description: "展开关闭icon插槽",
            table: {
                category: "slots",
            },
        },
        changeSelect:{
            name:"null",
            table:{
                category: "events",
            }
        }
    },
    component: ZCollapse
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ZCollapse, ZCollapseItem },
    template:
        "<div>" +
            "<z-collapse v-bind='$props'>" +
                "<z-collapse-item name='1' title='标签1'>内容1</z-collapse-item>" +
                "<z-collapse-item name='2' title='标签2'>内容2</z-collapse-item>" +
            "</z-collapse>" +
        "</div>"
});

export const Primary = Template.bind({});
Primary.args = {
    accordion:false
};
