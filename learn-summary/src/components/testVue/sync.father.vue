<template>
    <div id="only">
        <h1>sync父组件</h1>
        <sync-child :count.sync="msg"></sync-child>
        
    </div>
</template>
<script>
import syncChild from './sync.child'
export default {
   name: 'vue',
   data() {
      return {
        msg:"统计信息"
      };
   },
   components: {
    syncChild,
   },
}
</script>
<style>
</style>