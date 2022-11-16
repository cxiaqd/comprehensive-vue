<template>
  <div id="grandson">
    <p>v2 is {{ v2 }}</p>
    <attrs-grandson v-bind="$attrs"
      ><p>
        这里用的就是grandson组件中的插槽，这里的内容在渲染的时候会替代组件中的插槽位置，具体内容如下:<br />
        插槽：我们提取出了一个公共的组件，方便在其它父组件中使用，但是每一个父组件有可能还有着自己各不相同的特色想要添加到这个组件中，怎么办？
        解决：在公共组件中留下一个插槽供各个父组件插入自己的特色内容，
        有时可能会插入多个内容，因此又出现具名插槽，同时方便了排版，
      </p></attrs-grandson
    >
  </div>
</template>
<script>
import attrsGrandson from "@/components/testVue/02-attrsGrandson";

export default {
  name: "attrsChild",
  inheritAttrs: false,

  data() {
    return {};
  },
  props: {
    v2: "",
  },
  components: {
    attrsGrandson,
  },
  method: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>