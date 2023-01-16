<template>
    <div id="only">
        <h1>D组件</h1>
    </div>
</template>
<script>
export default {
   name: 'vue',
   data() {
      return {};
   },
   components: {},
   methods: {},
   mounted() {
    console.log("D组件");
   },
   computed: {},
   watch: {},
   //生命周期 - 创建完成（可以访问当前this实例）
   created() {},
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