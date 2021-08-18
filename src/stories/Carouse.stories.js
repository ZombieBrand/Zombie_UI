import ZCarousel from './Carousel.vue'
import ZCarouselItem from './CarouselItem.vue'


export default {
    title:'Example/Carousel',
    parameters: {
        docs: {
            description: {
                component: "轮播图",
            },
        },
    },
    component: ZCarouselItem,
    argTypes: {
        selected:{
            name:"selected",
            description: "支持v-model方法",
        },
        name:{
            name:"name",
            description: "绑定命名值",
            table: {
                category: "CarouselItem",
            },
        }
    }
}
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ZCarousel, ZCarouselItem },
    data(){
        return{
            activeIndex: args.selected
        }
    },
    template:
        "<z-carousel v-model='activeIndex' v-bind='$props'><z-carousel-item name='1'><div style='display: flex;justify-content: center;align-items: center;height:300px;font-size:18px;background-color: #2b4450;color:white'>内容1</div></z-carousel-item><z-carousel-item name='2'><div style='display: flex;justify-content: center;align-items: center;height:300px;font-size:18px;background-color: #5F192C;color:white'>内容2</div></z-carousel-item><z-carousel-item name='3'><div style='display: flex;justify-content: center;align-items: center; height:300px;font-size:18px;background-color:#6c757d;color:white'>内容3</div></z-carousel-item></z-carousel>"
});

export const Primary = Template.bind({});
Primary.args = {
    selected:'2',
    autoPlay:false,
    autoPlayDelay:3000
};
