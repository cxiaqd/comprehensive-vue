<template>
  <div class="position-relative" style="height: 380px;background: skyblue;">
    <div class="text-black-2 font-14">
      弹框内有完整的生命周期，可以按F12看到打印信息<br />
      这个组件<code class="text-red font-sans">mounted</code
      >的时候还请求了一个接口
    </div>
  </div>
</template>
  
  <script>

export default {
  data() {
    return {};
  },
  created() {
    console.log(["created"]);
  },
  mounted() {
    console.log(["mounted"]);
  },
  destroyed() {
    console.log(["destroyed"]);
  },
};
</script>