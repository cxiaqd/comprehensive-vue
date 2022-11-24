<template>
  <div id="CssLearn">
    <!-- 使用before&after画出凹凸型 -->
    <nav-guard></nav-guard>
    <div class="one-box">
      <span class="ao"></span>
      <span class="tu"></span>
    </div>
    <div class="split-line"></div>
    <div class="two-box">
      <div class="text-area">
        <textarea></textarea>
      </div>
      <div class="container">
        <div class="textarea">
          <textarea rows="5"></textarea>
        </div>
      </div>
      <div class="solved">
        <textarea></textarea>
      </div>
    </div>
    <div class="three-box">
      <!-- max-width 覆盖了style属性中的！important 在图片src属性没有正常加载到时-显示alt信息 -->
      <img
        src="@/assets/imgs/woman.jpg"
        style="width: 480px !important"
        alt="content生成alt信息"
      />
    </div>
    <div class="fore-box">
      <!-- 内联元素的padding在垂直方向上表现为层叠效应，margin属性垂直方向无效  -->
      <span>span-padding</span>
      <p>p-padding</p>
      <a href="">登录</a><a href="">注册</a>
    </div>
    <div class="five-box">
      <!-- <span></span> -->
      <button id="btn"></button>
      <label for="btn">按钮</label>
    </div>
    <div class="six-box">
      <div class="box">
        <img src="@/assets/imgs/woman.jpg" />
        <p>
          文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...文字内容...
        </p>
      </div>
    </div>
    <div class="seven-box">
      <div class="box">
        <div></div>
      </div>
      <div class="father">
        <div class="son"></div>
      </div>
      <div class="icon-menu"></div>
      <!-- border绘制 及颜色设置 -->
      <a href class="add" title="继续上传"> 添加图片 </a>
      <div class="right-border">
        <!-- <img src="@/assets/imgs/rainbow.gif" alt="" /> -->
      </div>
    </div>
    <div class="eight-box">
      <div class="parent" style="background-color: lightgrey">
        <div class="left">
          <p>left</p>
        </div>
        <div class="center" style="background-color: pink">
          <p>center</p>
          <p>center</p>
        </div>
        <div class="right">
          <p>right</p>
        </div>
      </div>
    </div>
    <div class="nine-box">
      小图标垂直居中 <img src="@/assets/imgs/播放.png" alt="" />
    </div>
    <div class="ten-box">
      <img src="@/assets/imgs/woman.jpg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "CssLearn",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.split-line {
  border: 1px solid red;
}
.one-box {
  width: 200px;
  margin: 0 auto;
  .ao,
  .tu {
    display: inline-block;
    width: 0;
    font-size: 14px;
    line-height: 18px;
    margin: 35px;
    color: #fff;
  }

  .ao:before,
  .tu:before {
    outline: 2px solid #cd0000;
    font-family: Consolas, Monaco, monospace;
  }

  .ao:before {
    content: "love你love";
  }

  .tu {
    direction: rtl;
  }

  .tu:before {
    content: "我love你";
  }
}
.two-box {
  .text-area {
    width: 30%;
    margin: 10px auto;
    background: #f0f3f9;
    padding: 20px 0;
    // display: block;
  }
  .container {
    width: 50%;
    margin: 0 auto;
    padding: 20px 0;
    background-color: #f0f3f9;
  }
  .textarea {
    padding: 9px 8px;
    border: 1px solid #d0d0d5;
    border-radius: 4px;
    background-color: #fff;
    textarea {
      width: 100%;
      line-height: 20px;
      padding: 0;
      border: 0 none;
      outline: 0 none;
      background: none;
      resize: none;
    }
  }
  .solved {
    width: 50%;
    margin: 10px auto;
    textarea {
      width: 30%;
      padding: 9px 8px;
      line-height: 20px;
      -ms-box-sizing: border-box; /* for IE8 */
      box-sizing: border-box;
    }
  }
}
.three-box {
  width: 50%;
  margin: 0 auto;
  img {
    max-width: 256px;
  }
  img ::after {
    content: attr(alt);
  }
}
.fore-box {
  margin: 0 auto;
  text-align: center;
  span {
    background: #cd0000;
    padding: 50px;
    margin: 100px;
  }
  a + a:before {
    content: "";
    font-size: 0;
    padding: 10px 3px 1px;
    margin-left: 6px;
    border-left: 1px solid gray;
  }
}
.five-box {
  margin: 0 auto;
  height: 200px;
  width: 200px;
  span {
    padding: 50%;
    font-size: 0;
    background-color: gray;
  }
  button {
    position: absolute;
    clip: rect(0 0 0 0);
  }
  label {
    display: inline-block;
    line-height: 20px;
    padding: 10px;
  }
}
.six-box {
  .box {
    overflow: hidden;
  }
  .box > img {
    float: left;
  }
  .box > p {
    margin-left: 140px;
  }
}
.seven-box {
  .box {
    background-color: olive;
    overflow: hidden;
  }
  .box > div {
    // margin: 50%;
  }
  .father {
    width: 300px;
    height: 150px;
    position: relative;
    border: 1px solid #cd0000;
  }
  .son {
    position: absolute;
    width: 200px;
    height: 100px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background: #cd0000;
  }
  .icon-menu {
    width: 120px;
    height: 20px;
    border-top: 60px double;
    border-bottom: 20px solid;
  }
  .add {
    display: inline-block;
    width: 76px;
    height: 76px;
    color: #ccc;
    border: 2px dashed;
    text-indent: -12em;
    transition: color 0.25s;
    position: relative;
    overflow: hidden;
  }
  .add:hover {
    color: #34538b;
  }
  .add::before,
  .add::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .add::before {
    width: 20px;
    border-top: 4px solid;
    margin: -2px 0 0 -10px;
  }
  .add::after {
    height: 20px;
    border-left: 4px solid;
    margin: -10px 0 0 -2px;
  }
  .right-border {
    height: 500px;
    // border-right: 50px solid #cd0000;
    background: url("@/assets/imgs/rainbow.gif") no-repeat;
    background-position: right 50px bottom 0;
  }
}
.eight-box {
  p {
    margin: 0;
  }
  .parent {
    position: relative;
  }
  .center {
    box-sizing: border-box;
    padding: 0 20px;
    background-clip: content-box;
    border-left: 210px solid transparent;
    border-right: 310px solid lightgreen;
  }
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
  }
  .right {
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
  }
}
.nine-box {
  img {
    display: inline-block;
    width: 20px;
    height: 1ex;
  }
}
.ten-box {
  border: 1px solid red;
  img {
    height: 96px;
    margin-top: -500px;
  }
}
</style>