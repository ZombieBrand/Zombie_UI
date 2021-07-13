import ZCascader from './Cascader.vue'
export default {
    title: "Example/Cascader",
    parameters: {
        docs: {
            description: {
                component: "级联选择",
            },
        },
    },
    component: ZCascader,
    argTypes: {
        selected:{
            name:"无",
            table:{
                category: "events",
            }
        }
    }
}

const Template = (args, { argTypes }) => {
    return {
        props: Object.keys(argTypes),
        components: {ZCascader},
        template:
            "<z-cascader v-bind='$props'></z-cascader>",
    };
};

export const Primary = Template.bind({});
Primary.args = {
    options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
                value: 'yizhi',
                label: '一致'
            }, {
                value: 'fankui',
                label: '反馈'
            }, {
                value: 'xiaolv',
                label: '效率'
            }, {
                value: 'kekong',
                label: '可控'
            }]
        }, {
            value: 'daohang',
            label: '导航',
            children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
            }, {
                value: 'dingbudaohang',
                label: '顶部导航'
            }]
        }]
    },{
        value:'ceshi',
        label:'测试'
    }],
};
