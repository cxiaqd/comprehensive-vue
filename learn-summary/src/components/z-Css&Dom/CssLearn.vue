<template>
  <div id="CssLearn">
    <!-- 使用before&after画出凹凸型 -->
    <div class="ao-tu">
      <span class="ao"></span>
      <span class="tu"></span>
    </div>
    <div class="split-line"></div>
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
<style>
.split-line {
  border: 1px solid red;
}
.ao-tu {
  width: 200px;
  margin: 0 auto;
}

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
</style>