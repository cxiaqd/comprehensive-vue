// 计算时间差
function timeFn(d1) {
    //di作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateBegin = new Date(d1.replace(/-/g, '/')); //将-转化为/，使用new Date
    let dateEnd = new Date(); //获取当前时间
    let dateDiff = dateEnd.getTime() - dateBegin.getTime(); //时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)); //计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000)); //计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000)); //计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000);
    console.log(`相差${dayDiff}天${hours}小时${minutes}分钟${seconds}秒`);
}
let t3 = "2021-12-31 18:57:38";
timeFn(t3);

function secToTime1() {
    //数据样式：Mon Aug 23 2021 11:55:08 GMT+0800 (中国标准时间)
    var date1 = new Date();//获取当前系统时间
    //数据样式：2021/8/23 上午11:55:58
    var date2 = date1.toLocaleString();
    //数据样式：2021/8/23
    var date3 = date1.toLocaleDateString();
    //数据样式：上午11:56:47
    var date4 = date1.toLocaleTimeString();
    //数据样式：2021/8/23 上午11:56:57
    var date5 = date1.toLocaleString();
    //数据样式：Mon, 23 Aug 2021 03:57:13 GMT
    var date6 = date1.toUTCString();
    //创建一个div,id=div1,并向div中赋值时间
    console.log(date2, date3, date4, date5, date6);
};
function secToTime2() {
    var timdedetail = (new Date("2020/08/22 04:08:11")).getTime();//假如是10位毫秒需要乘1000

    //获取年份
    var year = new Date(timdedetail).getFullYear();
    //获取月份，获取的月份比实际小1，所以在使用的时候需要+1
    var month = new Date(timdedetail).getMonth() + 1;
    //获取日
    var date = new Date(timdedetail).getDate();
    //获取时
    var hours = new Date(timdedetail).getHours();
    //获取分
    var minutes = new Date(timdedetail).getMinutes();
    //获取秒
    var seconds = new Date(timdedetail).getSeconds();
    //组合格式为年-月-日 时：分：秒（2021-7-5 21:21:21）
    var time = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
    console.log(time);
    //输出样式：2020-10-25 14:25:36
};
function secToTime3() {
    // 毫秒转化为时间格式
    //将毫秒转化成年月日时分秒
    let timdedetail = 1498076791000;//假如是10位毫秒需要乘1000
    //获取年份
    let year = new Date(timdedetail).getFullYear();
    //获取月份,月份是从0开始计算的，所以要加一
    let month = new Date(timdedetail).getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    //获取日
    let date = new Date(timdedetail).getDate();
    if (date < 10) {
        date = "0" + date;
    }
    //获取小时
    let h1 = new Date(timdedetail).getHours() < 10 ? '0' + new Date(timdedetail).getHours() : new Date(timdedetail).getHours();
    //获取分钟
    let m1 = new Date(timdedetail).getMinutes() < 10 ? '0' + new Date(timdedetail).getMinutes() : new Date(timdedetail).getMinutes();
    //获取秒
    let s1 = new Date(timdedetail).getSeconds() < 10 ? '0' + new Date(timdedetail).getSeconds() : new Date(timdedetail).getSeconds();
    //组合格式为年-月-日 时：分：秒（2021-07-05 21:21:21）
    let starttime = year + "-" + month + "-" + date + " " + h1 + ":" + m1 + ":" + s1;
    console.log(starttime);
}
secToTime2();
secToTime3();


