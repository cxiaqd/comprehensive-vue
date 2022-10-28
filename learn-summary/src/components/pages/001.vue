<template>
  <div id="one-vue">
    <div class="bgImg"></div>
    <!-- <img src="@/assets/imgs/sandyBeach.jpg" alt="" /> -->
    <!-- <div class="box"></div> -->
  </div>
</template>
<script>
export default {
  name: "one-vue",
  data() {
    return {};
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
  background: url("@/assets/imgs/sandyBeach.jpg");
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
</style>