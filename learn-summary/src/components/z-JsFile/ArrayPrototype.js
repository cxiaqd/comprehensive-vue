let arr1 = [[1, 2, 3]];
const arr2 = [4, 5];
const arr3 = ["hai", 8, 0];
const resultArr = arr1.concat(arr2, arr3);

arr1[0].push(123);

// console.log(resultArr);
// console.log(arr2);

const num1 = [[1]];
const num2 = [2, [3]];

const numbers = num1.concat(num2);

console.log(numbers);
// results in [[1], 2, [3]]

// 修改 num1 的第一个元素
num1[0].push(4);
numbers[0].push(789)

console.log(numbers);
console.log(num1);
// results in [[1, 4], 2, [3]]
