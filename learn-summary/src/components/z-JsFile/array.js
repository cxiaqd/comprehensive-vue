/* Array.prototype.at() 
at() 方法接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数*/

const cart = ['apple', 'banana', 'pear']
function returnLast(arr) {
    return arr.at(-1);
}
const item = returnLast(cart)
// console.log(item);


const letters = [['a'], 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
letters[0].push('456')
console.log(alphaNumeric);

let everyArr = [12, 5, 8, 130, 44]
function isBigEnough(element) {
    return element >= 10;
}
let everyResult = [12, 5, 8, 130, 44].every(isBigEnough);   // false
let everyResult2 = everyArr.every((element, index, everyArr) => {
    console.log(index);
    return element >= 10;
}); // true

// console.log(everyResult);
// console.log(everyResult2);

// Number.isFinite(num) //用来检测传入的数是否为一个有穷数

const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(({ name }) => name === 'cherries');

// console.log(result) // { name: 'cherries', quantity: 5 }

const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.find(function (value, index) {
    // console.log('Visited index ', index, ' with value ', value);
});


const arr2 = [0, 1, 2, [10, [2, [3, 4]]]];
// console.log(arr2.flat(3));

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// console.log(arr4.flat(Infinity));

const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element, index, array) => {
    // console.log({ element }, index, array);
    numCallbackRuns++;
});

let arrayLike = {
    '0': 'tom',
    '1': '65',
    '2': '男',
    '3': ['jane', 'john', 'Mary'],
    length: 4
}
let arr = Array.from(arrayLike)
// console.log(arr)  // [ undefined, undefined, undefined, undefined ]

const indexArr = [2, 9, 9]
// console.log(indexArr.indexOf(9));

// const strArr = { "a": 1, "b": 2, "c": 3, length: 3 };
const strArr = { 0: 1, 1: 2, 2: 3, length: 3 };

// console.log(strArr); // {0: 1, 1: 2, 2: 3, length: 3}

let reverseStr = Array.prototype.reverse.call(strArr); //same syntax for using apply()

// console.log(strArr); // {0: 3, 1: 2, 2: 1, length: 3}
// console.log(reverseStr); // {0: 3, 1: 2, 2: 1, length: 3}

const array2 = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0

// console.log(array2.some(even));
if (array2.some(even)) {
    console.log("123456");
}


// const array3 = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));


var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
// console.log(newstr);


var obj = {
    name: 'zhagnsan',
    age: 19
}
delete obj.name //true
console.log(obj);

