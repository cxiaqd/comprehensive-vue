<template>
  <div id="data-picker">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="interval"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>
    <div>
      <el-select v-model="show" value-key="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="show" placeholder="请输入内容"></el-input>
    </div>
    <p>样式1</p>
		<ul id="demo1">
			<li>首页</li>
			<li>产品</li>
			<li>服务</li>
			<li>关于</li>
		</ul>
    <p>样式2</p>
		<ul id="demo2">
			<li>首页</li>
			<li>产品</li>
			<li>服务</li>
			<li>关于</li>
		</ul>
		
		<p>样式3</p>
		<ul id="demo3">
			<li>首页</li>
			<li>产品</li>
			<li>服务</li>
			<li>关于</li>
		</ul>
		
		<p>样式4</p>
		<ul id="demo4">
			<li>首页</li>
			<li>产品</li>
			<li>服务</li>
			<li>关于</li>
		</ul>

  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      interval: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      show: {
        value: "",
      },
    };
  },
  components: {},
  methods: {},
  mounted() {},
  computed: {},
};
</script>
<style>
#data-picker {
  margin-left: 50%;
  transform: translateX(-50%);
}
p {
  text-align: center;
  margin: 40px 0 10px 0;
}
ul {
  padding: 0;
  width: 400px;
  height: 45px;
  margin: auto;
  list-style: none;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
}
li {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
/***************样式1   *********/
#demo1 li:before {
  content: "";
  position: absolute;
  width: 20%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  height: 5px;
  background-color: coral;
  opacity: 0;
}
#demo1 li:hover:before {
  bottom: 0;
  opacity: 1;
  transition: bottom 0.3s, opacity 0.3s 0.1s;
}
/***************样式2   *********/
#demo2 li:before{
			content: '';
			position: absolute;
			width: 0;
			left: 50%;
			bottom: 0;
			height: 5px;
			background-color: coral;
		}
		#demo2 li:hover:before{
			width: 80%;
			left: 10%;
			transition: all 0.5s;
		}
		/***************样式3   *********/
		#demo3 li:before{
			content: '';
			position: absolute;
			width: 0;
			left: 100%;
			bottom: 0;
			height: 5px;
			background-color: coral;
		}
		#demo3 li:hover:before{
			width: 80%;
			left: 10%;
			transition: all 0.5s;
		}
		#demo3 li:hover ~ li:before{
			left: 0;
		}
		
		/***************样式4   *********/
		#demo4 li:before{
			content: '';
			position: absolute;
			width: 0;
			left: 0;
			bottom: 0;
			height: 5px;
			background-color: coral;
		}
		#demo4 li:after{
			content: '';
			position: absolute;
			width: 0;
			right: 0;
			bottom: 0;
			height: 5px;
			background-color: coral;
		}
		#demo4 li:hover:before{
			width: 50%;
			transition: all 0.3s ease-in-out; 
		}
		#demo4 li:hover:after{
			width: 50%;
			transition: all 0.3s ease-in-out;
		}
</style>