<template>
    <div id="only">
        <el-button @click="mixinClick">mixinClick</el-button>
    </div>
</template>
<script>
import {mixins} from '@/mixin/index'
export default {
   name: 'vue',
   mixins:[mixins],
   data() {
      return {};
   },
   components: {},
   methods: {},
   mounted() {
    console.log("组件mounted中调用mixin中数据：",this.msg);
   },
   computed: {},
   watch: {},
   //生命周期 - 创建完成（可以访问当前this实例）
   created() {
    console.log("组件created中调用mixin中数据：",this.msg);
   },
   //生命周期 - 创建之前
   beforeCreate() {},
   //生命周期 - 挂载之前
   beforeMount() {},
   //生命周期 - 更新之前
   beforeUpdate() {},
   //生命周期 - 更新之后
   updated() {}, 
   //生命周期 - 销毁之前
   beforeDestroy() {},
   //生命周期 - 销毁完成
   destroyed() {}, 
   //如果页面有keep-alive缓存功能，这个函数会触发
   activated() {}, 
}
</script>
<style>
</style>