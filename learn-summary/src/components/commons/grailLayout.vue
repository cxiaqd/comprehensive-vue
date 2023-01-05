<template>
  <div id="GrailLayout">
    <div class="header"><h1>头部导航栏</h1></div>
    <div class="content wrapper">
      <!-- 想要第一个渲染处middle所以放在left&right前面 -->
      <div class="middle "><h1>中间内容栏</h1></div>
      <div class="left"><h1>左侧内容栏</h1></div>
      <div class="right"><h1>右侧内容栏</h1></div>
    </div>
    <div class="footer"><h1>底部导航栏</h1></div>
  </div>
</template>
<script>
export default {
  name: "GrailLayout",
};
</script>
<style scoped>
.header {
  background: #e5e5e5;
}
.middle {
  width: 100%;
  background: #7fffd4;
}
.wrapper {
  padding-left: 200px;
  padding-right: 200px;
}
.left {
  width: 200px;
  float: left;
  background: #f5f5dc;
}
.right {
  width: 200px;
  float: left;
  background: #5f9ea0;
}
.footer {
  background: #e5e5e5;
  clear: both;
}
</style>