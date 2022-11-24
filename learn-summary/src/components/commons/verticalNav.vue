<template>
  <div>
    <div class="vertical-nav">
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
  name: "vue",
  data() {
    return {
      num: 0,
      selectBox: [{ key: "el-data-picker", path: "/elDataPicker" }],
    };
  },
  components: {},
  methods: {
    jumpTo(item, index) {
      this.$router.push({ path: item.path });
    },
  },
};
</script>
<style scoped>
.vertical-nav {
  width: 150px;
  height: calc(100% - 55px);
  background: skyblue;
  position: absolute;
  right: 0;
}
.but-div {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}
</style>