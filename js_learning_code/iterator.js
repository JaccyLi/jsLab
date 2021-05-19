'use strict';

let now = new Date();
console.log(now);

let str = "hello, test";

for (let s of str) {
    console.log(s);
}

let str2 = '𝒳😂';
for (let char of str2) {
    console.log(char);
    //alert( char ); // 𝒳, and then 😂
}

str = "hello";
let iterator = str[Symbol.iterator]();

while (true) {
    let res = iterator.next();
    if (res.done) break;
    console.log(res);
    console.log(res.value);
}


// 可迭代对象和类数组对象通常都 不是数组，它们没有 push 和 pop 等方法。如果我们有一个这样的对象，并想像数组那样操作它，那就非常不方便。例如，我们想使用数组方法操作 range，应该如何实现呢？
// Array.from
/*
有两个看起来很相似，但又有很大不同的正式术语。请你确保正确地掌握它们，以免造成混淆。
Iterable 如上所述，是实现了 Symbol.iterator 方法的对象。
Array-like 是有索引和 length 属性的对象，所以它们看起来很像数组。
*/
//有一个全局方法 Array.from 可以接受一个可迭代或类数组的值，并从中获取一个“真正的”数组。然后我们就可以对其调用数组方法了
let arrayLikeObj = {
    0: "suo.li",
    1: "xiao.liu",
    length: 20
};

//Uncaught TypeError: arrayLikeObj is not iterable
/*
for (let item of arrayLikeObj) {
    console.log(item);
}
*/

let a = Array.from(arrayLikeObj);

for (let item of a) {
    console.log(item);
}

// 不可迭代对象range
//let range = {
//  from: 1,
//  to: 5
//};
// 新曾Symbol.iterator方法属性后为可迭代对象range
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range) {
  alert(num); // 1, 然后是 2, 3, 4, 5
}

let arr = Array.from(range);
for (let a of arr) {
    console.log(a);
}

// Array.from 可接收第二个参数，为一个函数，作用在每个元素上
let arrFn = Array.from(range, num => num * num);
for (let a of arrFn) {
    console.log(a);
}

let ss = Array.from(str2);
console.log(ss[0]);
console.log(ss[1]);
console.log(ss.length);


//我们甚至可以基于 Array.from 创建代理感知（surrogate-aware）的slice 方法（译注：也就是能够处理 UTF-16 扩展字符的 slice 方法）：

function slice(str, start, end) {
  return Array.from(str).slice(start, end).join('');
}

str = '𝒳😂𩷶';

alert( slice(str, 1, 3) ); // 😂𩷶

// 原生方法不支持识别代理对（译注：UTF-16 扩展字符）
alert( str.slice(1, 3) ); // 乱码（两个不同 UTF-16 扩展字符碎片拼接的结果）