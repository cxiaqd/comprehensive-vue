<template>
  <div id="only">
    <h1>sync子组件</h1>
    <button @click="childbtn">子组件点击</button>
    <h2>props: {{ count }}</h2>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {};
  },
  props: {
    count: "",
  },
  methods: {
    childbtn() {
      this.$emit("update:count", '#emit');
    },
  },
};
</script>
<style>
</style>