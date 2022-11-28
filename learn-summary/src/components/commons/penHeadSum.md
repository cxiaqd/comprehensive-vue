# 1、Array.from()可接受**三个参数**

- **第一个参数**是一个类数组对象，即任何可迭代的结构，或者有一个length属性和可索引元素的结构

- **第二个参数**为可选的映射函数，这个函数可以直接增强新数组的值
- **第三个参数**用于指定映射函数中***this***的值

`const a1 = [1, 2, 3, 4];`

`const a2 = Array.from(a1, x => x**2);`

`const a3 = Array.from(a1, function(x) {return x**this.exponent},{exponent:2});`

`console.log(a2); // [1, 4, 9, 16]`

`console.log(a3); // [1, 4, 9, 16]`
