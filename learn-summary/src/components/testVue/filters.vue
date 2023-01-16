<template>
  <div id="only">
    <h1>filters</h1>
    {{ num | filterA(50) | filterB | filterC}}
    {{ num | filterA(10) }}
    {{ num | filterB }}
    {{ num | filterC }}
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      num: 100,
    };
  },
  filters: {
    filterA: function (num,val) {
      return num + val - 10;
    },
    filterB: function (val) {
      return val - 20;
    },
    filterC: function (val) {
      return val - 30;
    },
  },
  components: {},
  methods: {},
  computed: {},
  watch: {},
  mounted() {},
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