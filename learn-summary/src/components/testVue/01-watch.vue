<template>
  <div id="watch-test">
    <nav-guard></nav-guard>
    <div class="watch-box">
      <p>
        Ask for a question
        <input v-model="question" />
      </p>
      <p>
        input taskName
        <input v-model="form.taskName" />
      </p>
      <p>
        {{ toggle }}
        <input
          type="checkbox"
          v-model="toggle"
          true-value="yes"
          false-value="no"
        />
        <input type="radio" v-model="pick" :value="first" />
        <input type="radio" v-model="pick" :value="second" />
      </p>
    </div>
  </div>
</template>
  </div>
</template>
<script>
import NavGuard from "@/components/commons/jumpNav";

export default {
  name: "watchTest",
  watch: {
    question(newQuestion, oldQuestion) {
      this.getAnswer(newQuestion, oldQuestion);
    },
    "form.taskName"(val) {
      console.log(`***${val}`);
    },
    /**
     * 深度监听
     * 这样的方法对性能影响很大，修改obj里面任何一个属性都会触发这个监听器里的 handler
     * 值最初时候watch就执行就用到了handler和immediate属性
     */
    form: {
      handler(newName, oldName) {
        console.log(`////${newName}${oldName}`);
      },
      immediate: true,
      deep: true,
    },
    /**
     * 深度监听优化
     * 具体到监听某一个或几个属性
     */
    "form.taskName": {
      handler(newName, oldName) {
        console.log(`###${newName}${oldName}`);
      },
      immediate: true,
    },
  },
  data() {
    return {
      pick: "",
      second: "",
      first: "",
      toggle: "",
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      form: {
        taskName: "",
      },
    };
  },
  components: {
    NavGuard,
  },
  methods: {
    getAnswer(newval, oldval) {
      console.log(newval, oldval);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.watch-box {
  position: absolute;
  margin: 10px 0;
  padding: 10px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid skyblue;
}
</style>