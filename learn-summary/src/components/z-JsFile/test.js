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
console.log(fn()());
console.log(fn()());
let afn = fn();
console.log(afn());
console.log(afn());

