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
console.log(someDate);

