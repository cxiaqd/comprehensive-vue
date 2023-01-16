import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: "法外狂徒张三//",
    num: 10,
    list: [
      { id: 1, name: "李四" },
      { id: 2, name: "张三" },
      { id: 3, name: "李王五" }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
});

export default store;
