<template>
  <div id="data-picker">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="interval"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      interval: "",
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style>
#data-picker {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>