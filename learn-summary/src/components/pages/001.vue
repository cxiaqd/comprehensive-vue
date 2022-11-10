<template>
  <div id="one-vue">
    <nav-guard></nav-guard>

    <div class="bgImg"></div>
    <!-- <img src="@/assets/imgs/sandyBeach.jpg" alt="" /> -->
    <!-- <div class="box"></div> -->
  </div>
</template>
<script>
import NavGuard from "@/components/commons/jumpNav";

export default {
  name: "one-vue",
  data() {
    return {};
  },
  components: {
    NavGuard,
  },
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