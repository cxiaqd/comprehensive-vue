function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(reject, ms, 'done')
    })
}

// timeout(1000).then((value) => {
//     console.log(value);
// }, (val) => {
//     console.log(val);
// })

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


const getMax = (a, b) => Math.max(a, b);
let maxNum = [1, 100, 20, 230].reduce(getMax, 50); // 100
console.log(maxNum);

