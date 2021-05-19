'use strict';

let arr = new Array();
let arr1 = [];
let fruit = ["Apple", "Orange", "Plum", "Grape"];
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
//console.log(fruit.length);
//console.log(fruit);
//
//let miscArr = ['jack', {age: 23}, function() {console.log("I'm jack, I'm 23 years old.")}];
//console.log(miscArr[0]);
//console.log(miscArr[1].age);
//miscArr[2]()
////console.log(miscArr[2]());
//
//fruit.push("Banana");
//console.log(fruit);
//fruit.shift();
//console.log(fruit);
//fruit.unshift("Apple");
//console.log(fruit);
//fruit.pop();
//console.log(fruit);
//
//fruit = [];

//for (let i = 0; i < 20; i++) {
//    fruit.push(String(i));
//        console.log(fruit);
//     sleep(800);
//    //setInterval(1);
//    if (fruit.length > 5) {
//        fruit.shift()
//        console.log(fruit);
//    }
//}

// for (let i = 0; i < 10; i++) {
//     sleep(800);
//     fruit.push(String(i));
//     console.log(fruit);
//     if (fruit.length > 5) {
//         for (let i = 0; i <= fruit.length; i++) {
//             fruit.pop();
//             console.log(fruit);
//         }
//     }
// }

// array copy the reference
//console.log(fruit);
//console.log(fruit[0][0].codePointAt(0));
//let f = fruit;
//console.log(f === fruit);
//f.push("Pie apple", "Watermelon");
//console.log(fruit);

// let value of ...
// let key in ...
//fruit.name = "jack";
//
//for (let value of fruit) {
//  console.log(value);
//}
//
//for (let key in fruit) {
//  console.log(fruit[key]);
//}

// length not indicate the elements number
// just the (max index + 1)
//console.log(fruit.length);
//console.log(fruit);
//fruit[200] = "Strawberry";
//console.log(fruit.length);
//console.log(fruit);
//
//let matrix = [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//];
//
//let arr3 = [
//  "123",
//  "456",
//  "789"
//]
//
//console.log( matrix[1][1] ); // 5, the central element
//console.log( Number(arr3[1][1]) ); // 5, the central element
//
//console.log(fruit.toString());

let styles = ["Jazz", "Blues"];
//console.log(styles);
//styles.push("Tock-n-Roll");
//console.log(styles);
//styles[1] = "Classics";
//styles[Math.floor(styles.length - 1)/2] = "Classisc~";
//console.log(styles);
//styles.shift();
//console.log(styles);
//styles.unshift("Rap", "Raggae");
//console.log(styles);

//styles.push(function(name) {
//  console.log(this);
//  console.log(name);
//});
//
//styles[styles.length -1 ]("name");

function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("A number please?", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
    let sum = 0;
    for (let v of numbers) {
      sum += v;
    }
    console.log("sum:", sum);
    console.log("numbers:", numbers);
}

//sumInput()

function getMaxSubSum(arr) {
  let sumMax = 0;
  for (let i = 0; i < arr.length; i++) {
    let subSumMax = 0;
    for (let j = i; j < arr.length; j++) {
      subSumMax += arr[j];
      sumMax = Math.max(sumMax, subSumMax);
    }
  }
  return sumMax
}

function getMaxSubSumFast(arr) {
  let sumMax = 0;
  let subSumMax = 0;
  for (let v of arr) {
    subSumMax += v
    sumMax = Math.max(sumMax, subSumMax);
    if (subSumMax < 0 ) subSumMax = 0;
  }
  return sumMax
}

console.log(getMaxSubSum([1,4,5,7,-12,-13,2,5]));
console.log(getMaxSubSumFast([1,4,5,7,-12,-13,2,5]));