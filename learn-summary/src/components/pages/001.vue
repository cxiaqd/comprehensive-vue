<template>
  <div id="one-vue">
    <!-- <div class="bgImg"></div> -->
    <!-- <img src="@/assets/imgs/lifeCycle.png" alt="" /> -->
    <!-- <div class="box"></div> -->
    <span class="demonstration">默认</span>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期">
    </el-date-picker>
  </div>
</template>
<script>
export default {
  name: "one-vue",
  data() {
    return {
      value1: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>
<style lang='less' scoped>
#one-vue {
  height: 100%;
}
.box {
  height: 100%;
  background-color: antiquewhite;
}
.bgImg {
  height: 100%;
  width: 100%;
  background: url("@/assets/imgs/lifeCycle.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>