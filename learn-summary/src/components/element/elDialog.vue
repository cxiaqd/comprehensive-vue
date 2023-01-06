<template>
  <div id="only">
    <el-button @click="visible = true">点击</el-button>
    <el-dialog
      title="弹框标题"
      close-on-click-modal
      close-on-press-escape
      append-to-body
      :visible.sync="visible"
      top="middle"
      :area="[800, 500]"
    >
      <modal-inner></modal-inner>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="visible = false">确 定</el-button>
        <el-button @click="visible = false">取 消</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
        visible:false
    };
  },
  components: {
    ModalInner: () => import(/* webpackChunkName: "modal" */ './modal-inner'),
  },
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style>
</style>