<template>
  <div id="level-vertical">
    <nav-guard></nav-guard>
    <!-- 多行文本垂直居中 -->
    <div class="box-content">
      <!-- 第一种方法：父line-height+子行内块+子line-height自定义设置 -->
      <!-- 先对父元素设置高度和行高（相等），将子元素设置为行内块元素，模拟成单行文本，
        再对子元素设置vertical-align: middle;使其基线对齐，这时还未实现垂直居中，
        为子元素自定义line-height属性的值，覆盖继承自父元素的行高，即可实现垂直居中。 -->
      <div class="box-one">
        <div class="content">
          多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要
          line-height 属性的好朋友 vertical-align 属性帮助才可以，示例代码如下
        </div>
      </div>
      <!-- 第二种方法：table布局， 对table-cell元素设置百分比的宽高值时是无效的。 -->
      <div class="box-two">
        <div class="content">
          多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要
          line-height 属性的好朋友 vertical-align 属性帮助才可以，示例代码如下
        </div>
      </div>
      <div class="box-three">
        <div class="content">
          多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要
          line-height 属性的好朋友 vertical-align 属性帮助才可以，示例代码如下
        </div>
      </div>
      <div class="box-four">
        <div class="content">
          多行文本或者替换元素的垂直居中实现原理和单行文本就不一样了，需要
          line-height 属性的好朋友 vertical-align 属性帮助才可以，示例代码如下
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavGuard from "@/components/commons/jumpNav";

export default {
  name: "vue",
  data() {
    return {};
  },
  components: {
    NavGuard,
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.box-content {
  .box-one {
    width: 500px;
    line-height: 100px;
    background-color: yellow;
    .content {
      display: inline-block;
      line-height: 20px;
      vertical-align: middle;
    }
  }
  .box-two {
    display: table;
    width: 500px;
    height: 100px;
    background-color: gray;
    .content {
      display: table-cell;
      vertical-align: middle;
    }
  }
  .box-three {
    width: 500px;
    height: 100px;
    background-color: yellow;
    .content {
      display: inline-block;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .box-four {
    display: flex;
    width: 500px;
    height: 100px;
    background-color: skyblue;
    align-items: center;
  }
}
</style>