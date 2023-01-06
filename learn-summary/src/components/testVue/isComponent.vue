<template>
  <div id="is-component">
    <div class="center">
      <h1>comName:{{ comName }}</h1>
      <button @click="comName = 'Left'">Left</button>
      <button @click="comName = 'Right'">Right</button>
    </div>
    <div class="center">
      <component :is="comName"></component>
    </div>
  </div>
</template>
<script>
import Left from "@/components/testVue/isLeft";
import Right from "@/components/testVue/isRight";

export default {
  name: "vue",
  data() {
    return {
      comName: "Left",
    };
  },
  components: {
    Left,
    Right,
  },
  methods: {},
  mounted() {},
  computed: {},
  watch: {},
};
</script>
<style>
.center {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>