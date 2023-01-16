<template>
  <div id="only">
    <h1>A组件</h1>
  </div>
</template>
<script>
import dNew from "@/components/keepAlive/D";
export default {
  name: "vue",
  data() {
    return {
      num: 10,
    };
  },
  components: {
    dNew,
  },
  methods: {},
  mounted() {
    console.log("这里是A组件");
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
};
</script>
<style>
</style>