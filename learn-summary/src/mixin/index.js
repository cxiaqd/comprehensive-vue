export const mixins = {
    data() {
        return {
            msg: "mixin混入测试"
        };
    },
    computed: {},
    created() {
        console.log("我是mixin中的created生命周期函数");
    },
    mounted() {
        console.log("我是mixin中的mounted生命周期函数");
    },
    methods: {
        mixinClick() {
            console.log("我是mixinClick点击事件");
        }
    }
}