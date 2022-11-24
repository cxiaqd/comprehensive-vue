<template>
  <div id="app">
    <nav-guard></nav-guard>
    <vertical-nav></vertical-nav>
    <router-view></router-view>
  </div>
</template>
<script>
import NavGuard from "@/components/commons/jumpNav";
import VerticalNav from "@/components/commons/verticalNav.vue";

export default {
  components: {
    NavGuard,
    VerticalNav,
  },
};
</script>

<style >
html,
body,
#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
