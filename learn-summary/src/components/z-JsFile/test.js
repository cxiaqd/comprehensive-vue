let arr = [{ lat: '123', lon: '456' }, { lat: '123', lon: '456' }, { lat: '123', lon: '456' }]
// let newarr = [...arr.lat, ...arr.lon]
// console.log(newarr);
let es6 = {
    edition: 6,
    committee: "TC39",
    standard: "ECMA-262"
};
for (const e in es6) {
    // console.log(e);
}

// for (var key of Object.keys(es6)) {
//     console.log(key + ': ' + es6[key]);
// }

let text = "123456"
function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    text = value;
    console.log(value);
}

// asyncPrint('hello world', 50);
// console.log(text);

function sleep(interval) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    })
}

// 用法
async function one2FiveInAsync() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        await sleep(1000);
    }
}

// one2FiveInAsync();

class Foo {
    static classMethod() {
        return 'hello';
    }
}

class Bar extends Foo {
    static classMethod() {
        return super.classMethod() + ', too';
    }
}
// console.log(Bar.classMethod());
// "hello, too"

function Person() {
    // Person() 构造函数定义 `this`作为它自己的实例。
    let age = 0;
    console.log(this.age);
    setInterval(() => {
        // 在非严格模式，growUp() 函数定义 `this`作为全局对象，
        // 与在 Person() 构造函数中定义的 `this`并不相同。
        this.age++;
        console.log(this.age);


    }, 1000);
}

// Person()


let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression,
    sumExpression) {
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return 'foobar';
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
// let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

// console.log(untaggedResult);
// console.log(taggedResult);


let someDate = new Date(Date.parse("May 25, 2019"))
// console.log(someDate);

let multiply = (a, b) => a * b
console.log(multiply(2, 4));

function sum(num1, num2) {
    return num1 + num2;
}
// console.log(sum(5, 6));

function doAdd(num1, num2) {
    arguments[1] = 10;
    console.log(arguments.callee);
    console.log(arguments[0] + num2);
}
// doAdd(5, 8)


function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // return num * factorial(num - 1);
        return num * arguments.callee(num - 1);
    }
}

// console.log(factorial(5));
let trueFactorial = factorial;

// factorial被重新定义，覆盖了之前的定义
factorial = function () {
    return 0;
};

// console.log(trueFactorial(5));

function sum(num1, num2) {
    return num1 + num2;
}
function callSum1(num1, num2) {
    // return sum.apply(this, arguments); // 传入arguments对象
    return sum(arguments); // 传入arguments对象
}
function callSum2(num1, num2) {
    // return sum.apply(this, [num1, num2]); // 传入数组
    return sum([num1, num2]); // 传入数组
}
// console.log(callSum1(10, 10)); // 20
// console.log(callSum2(10, 10)); // 20


function fn() {
    var a = 3;
    return function () {
        return ++a;
    }
}
// console.log(fn()());
// console.log(fn()());
let afn = fn();
// console.log(afn());
// console.log(afn());

// function foo() {
//     function bar(a) {
//         var i = 3;
//         console.log(a + i);
//     };
//     for (var i = 0; i < 10; i++) {
//         bar(i * 2)
//     }
// }
// foo()


// function foo() {
//     console.log(afoo); // 3（不是 2 ！ ）
// }
// function bar() {
//     var afoo = 3;
//     foo();
// }
// var afoo = 2;
// bar();

// var count = 10;
// var obj = {
//     count: 0,
//     cool: function coolFn() {
//         var self = this;
//         console.log("awesome?", this.count);
//         // setTimeout(function timer() {
//         //     self.count++;
//         //     console.log("awesome?", self.count);
//         // }, 100);

//     }
// };
// obj.cool();
// setTimeout(obj.cool(), 100);

// var obj = {
//     id: "awesome",
//     count: 0,
//     cool: function coolFn() {
//         setTimeout(() => {
//             this.count++;
//             console.log(this.id, this.count);
//         }, 100);
//     }
// };
// var id = "not awesome"
// obj.cool(); // 酷
// setTimeout(obj.cool, 100)
// var count = 5;
// console.log(this.count);
// function foo(num) {
//     let count = 0;
//     console.log(`foo:${num}`);
//     console.log(this.count);
//     this.count++;
// }
// for (let i = 0; i < 10; i++) {
//     if (i > 5) {
//         foo(i)
//     }
// }


// let arrSort = [
//     {
//         name: "杭州",
//         flag: false,
//         num: 1
//     },
//     {
//         name: "南京",
//         flag: true,
//         num: 2
//     },
//     {
//         name: "上海",
//         flag: true,
//         num: 3
//     },
//     {
//         name: "宁波",
//         flag: true,
//         num: 4
//     },
//     {
//         name: "滨江",
//         flag: true,
//         num: 5
//     },
//     {
//         name: "上海",
//         flag: false,
//         num: 6
//     },
//     {
//         name: "杭州",
//         flag: false,
//         num: 1
//     },
// ]
// arrSort.forEach((ele,index) =>{
//     if(ele === item){
//       selectList.splice(index,1);
//       selectList.unshift(item);
//       return;
//     }
//   });
// let selectlist = arrSort.filter((item) => {
//     if (item.flag) {
//         selectlist
//     }
// })
// arrSort.sort((item) => {
//     return item.flag ? -1 : 1
// })
// console.log(arrSort);

const CompanyTabWord = {
    xm: "姓名",
    zjhm: "身份证号",
    zjlx: "证件类型",
    lxdh: "联系电话",
    zjzp: "证件照片URL",
    xjzdxz: "现居住地详址",
    dwbh: "从业单位编号",
    dwmc: "从业单位名称",
    dwlb: "企业类别",
    rylb: "人员类别",
    zw: "职位名称",
    bz: "备注",
    cjsj: '创建时间',
    gxsj: '更新时间',
    yxbz: '有效备注',
    ssdwbh: '所属单位编号',
};
let values = Object.values(CompanyTabWord);
let keys = Object.keys(CompanyTabWord)
// console.log(values);
// console.log(keys);

let rest = []
for (let i = 0; i < values.length; i++) {
    rest.push({
        key: keys[i],
        value: values[i]
    })
}
console.log(rest);

