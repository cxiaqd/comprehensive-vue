<template>
  <div id="el-data">
    <el-autocomplete
      clearable
      @clear="setBlur()"
      @input="handle"
      v-model="search"
      :fetch-suggestions="querySearch"
      placeholder="请输入检索内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      search: "",
    };
  },
  components: {},
  methods: {
    setBlur() {
      console.log("setBlur");
      // document.activeElement获取当前焦点元素，blur()函数触发blur事件(失去焦点)
      document.activeElement.blur();
    },
    handle() {
      console.log("handle");
    },
    //过滤项目和class
    async querySearch(queryString, cb) {
      console.log(queryString);
      if (queryString && queryString.length > 0) {
        cb([
          { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
          {
            value: "Hot honey 首尔炸鸡（仙霞路）",
            address: "上海市长宁区淞虹路661号",
          },
          {
            value: "新旺角茶餐厅",
            address: "上海市普陀区真北路988号创邑金沙谷6号楼113",
          },
          { value: "泷千家(天山西路店)", address: "天山西路438号" },
          {
            value: "胖仙女纸杯蛋糕（上海凌空店）",
            address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101",
          },
        ]);
      }
    },
    // 选中 input 提示的某一条
    async handleSelect(item) {
      console.log(item.value);
    },
  },
  mounted() {},
  computed: {},
};
</script>
<style>
</style>