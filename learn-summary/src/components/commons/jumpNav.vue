<template>
  <div id="jump-nav">
    <div class="nav">
      <div
        v-for="(item, index) in selectBox"
        :key="index"
        @click="jumpTo(item, index)"
        class="but-div"
      >
        <el-button class="home-page">{{ item.key }}</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "jumpNav",
  data() {
    return {
      num: 0,
      selectBox: [
        { key: "属性watch", path: "/watch" },
        { key: "attrs&inheritAttrs", path: "/attrs" },
        { key: "多行文本垂直居中", path: "/text" },
        { key: "div水平垂直", path: "/div" },
        { key: "CSS", path: "/css" },
      ],
    };
  },
  methods: {
    jumpTo(item, index) {
      this.$router.push({ path: item.path });
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  height: 55px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  background: seagreen;
}
.but-div {
  margin-right: 10px;
}
</style>