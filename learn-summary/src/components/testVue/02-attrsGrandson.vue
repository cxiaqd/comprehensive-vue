<template>
  <div id="attrs-grandson">
    <p>v3 is {{ v3 }}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "attrsGrandson",
  inheritAttrs: false,

  data() {
    return {};
  },
  props: {
    v3: "",
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>