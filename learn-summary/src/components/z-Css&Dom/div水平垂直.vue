<template>
  <div id="div-level-vertical">
    <!-- 绝对定位方法：不确定当前div的宽度和高度，采用 transform: translate(-50%,-50%); 
        当前div的父级添加相对定位（position: relative;） -->
    <div class="box-one">
      <div>
        第一种：不确定当前div的宽度和高度,采用绝对定位，配合transform: translate
      </div>
    </div>
    <!-- 绝对定位方法：确定了当前div的宽度，margin值为当前div宽度一半的负值 -->
    <div class="box-two">第二种：确定了当前div的宽度</div>
    <!-- 绝对定位方法：绝对定位下top left right bottom 都设置0 -->
    <div class="box-three">第三种：绝对定位</div>
    <!-- flex布局方法：当前div的父级添加flex css样式 -->
    <div class="box-four">
      <div>第四种：flex布局</div>
    </div>
    <!-- table-cell实现水平垂直居中: table-cell middle center组合使用 -->
    <div class="box-five">
      <div>第五种：table-cell</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.box-one {
  width: 500px;
  height: 200px;
  background: skyblue;
  position: relative;
  margin-top: 20px;
  div {
    background: red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.box-two {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  margin-top: -50px;
}
.box-three {
  width: 200px;
  height: 200px;
  border: 10px solid salmon;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.box-four {
  height: 300px;
  width: 600px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid seagreen;
  div {
    width: 200px;
    height: 200px;
    background-color: red;
  }
}
.box-five {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 240px;
  height: 180px;
  border: 5px solid sienna;
}
</style>