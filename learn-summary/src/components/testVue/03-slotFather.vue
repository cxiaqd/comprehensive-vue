<template>
  <div id="slot-father">
    <!-- 参考文章链接:https://zhuanlan.zhihu.com/p/114502325 -->
    <div class="slot-box">
      <!-- 我们知道，如果直接想要在父组件中的<ebutton></ebutton> 中添加内容，是不会在页面上渲染的。-->
      <!-- <slot-child>123132</slot-child> -->

      <!-- 那么我们如何使添加的内容能够显示呢？在子组件内添加slot 即可。 -->
      <!-- 此时可以随便在子组件中随意添加一些内容，并成功进行渲染 -->
      <slot-child
        ><p>
          {{ parent }}
          <!-- 直接使用子组件中的数据是不行的，首先是访问不了，并且vue会发出警告 -->
          <!-- {{ child }} -->
        </p></slot-child
      >
      <!-- 如果不在子组件插槽中放入内容 插槽中默认的内容会占用插槽并进行渲染-->
      <slot-child></slot-child>

      <!-- 具名插槽的使用 -->
      <!-- "v-slot:" 可以简写为"#" -->
      <slot-child>
        <template #one> <p>这是插入到具名插槽one的内容</p> </template>
        <template v-slot:two> <p>这是插入到具名插槽two的内容</p> </template>
        <template v-slot:three> <p>这是插入到具名插槽three的内容</p> </template>
      </slot-child>

      <!-- 通过slot 我们可以在父组件为子组件添加内容，通过给slot命名的方式，我们可以添加不止一个位置的内容。但是我们添加的数据都是父组件内的。 -->
      <!-- 我们是否有其他的方法，让我们能够使用子组件的数据呢？ 其实我们也可以使用v-slot的方式： -->
      <slot-child>
        <template #childVal="slotVal"> ****{{ slotVal.val1 }}**** </template>
      </slot-child>
      <!-- 子组件插槽访问子组件数据步骤:
    1-首先在子组件的slot上动态绑定一个值( :key='value')
    2-然后在父组件通过v-slot : name = ‘values ’的方式将这个值赋值给 values
    3-最后通过{{ values.key }}的方式获取数据
     -->
    </div>
  </div>
</template>
<script>
import slotChild from "@/components/testVue/03-slotChild";

export default {
  name: "vue",
  data() {
    return {
      parent: "父组件中的数据:子组件插槽可以正常访问父组件中的数据",
    };
  },
  components: {
    slotChild,
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style scoped>
.slot-box {
  width: 500px;
  border: 2px dotted darkorange;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>