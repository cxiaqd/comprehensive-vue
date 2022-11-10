function async1() {
    async function timeout() {
        return "helloworld";
    }
    console.log(timeout());
    console.log("我在异步函数后面，会先执行谁呢");
    // Promise { 'helloworld' }
    // 我在异步函数后面，会先执行谁呢
}
function async2() {
    async function timeout() {
        return "helloworld";
    }
    timeout().then((result) => {
        console.log(result);
    });
    console.log("我在异步函数后面，会先执行谁呢");

    // 我在异步函数后面，会先执行谁呢
    // helloworld
}

// async1()
// async2()

function takeLongTime(n) {
    return new Promise(function (resolve) {
        setTimeout(() => resolve(n + 200), n);
    });
}
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}
async function doIt() {
    console.time("doIt");
    const time1 = 5000;
    const time2 = await step1(time1);
    const time3 = await step2(time2);
    const result = await step3(time3);
    console.log(`result is ${result}`);
    console.timeEnd("doIt");

}
// takeLongTime(200)
// console.log(takeLongTime(200));
doIt()
// async function test() {
//     let t = await takeLongTime(200)
//     console.log(t);
// }
// test()
// console.log(takeLongTime(200));
// takeLongTime(200).then((value) => {
//     console.log(value);
//     return "789"
// }).then((value) => {
//     console.log(value);
// })