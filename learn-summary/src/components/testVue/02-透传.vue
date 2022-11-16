<template>
  <div id="only">
    <nav-guard></nav-guard>
    <div class="father">
      <attrs-father :v1="value1" :v2="value2" :v3="value3"></attrs-father>
    </div>
  </div>
</template>
<script>
import NavGuard from "@/components/commons/jumpNav";

import attrsFather from "@/components/testVue/02-attrs";
export default {
  name: "vue",
  data() {
    return {
      value1: "father",
      value2: "child",
      value3: "grandson",
    };
  },
  components: {
    attrsFather,
    NavGuard,
  },
  methods: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>
<style>
.father {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>