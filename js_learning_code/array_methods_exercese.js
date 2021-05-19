'use strict';

// ====== 1 ====== //
// translate dashed string to camel-cased string
// camel-case-string ---> CamelCaseString

let dashString0 = "dash-separated-string";
let dashString1 = "-dash-separated-string";
let dashString2 = "-dash-separated-string-";
// let splitedStr0 = dashString0.split('-');
// let splitedStr1 = dashString1.split('-');
//console.log(splitedStr0);
//console.log(splitedStr1);

// mysolution
function dashToCamel(str) {
  let splitedStr = str.split('-');
console.log(splitedStr);
  let camelStr = "";
  if (splitedStr[0] == "") {
    for (let i of splitedStr) {
      i = i.slice(0,1).toUpperCase() + i.slice(1,)
      camelStr += i;
    } 
  } else {
    camelStr = splitedStr[0]
    splitedStr = splitedStr.slice(1,)
    for (let i of splitedStr) {
      i = i.slice(0,1).toUpperCase() + i.slice(1,)
      camelStr += i;
    } 
  }
console.log(`camelStr: ${camelStr}`);
}

// solution from javascript.info
function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word.slice(0,1).toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


//dashToCamel(dashString0);
//dashToCamel(dashString1);
//dashToCamel(dashString2);
//console.log(camelize(dashString0));
//console.log(camelize(dashString1));
//console.log(camelize(dashString2));


// ====== 2 ====== //
// Write a function filterRange(arr, a, b) that gets an array arr, looks for 
// elements with values higher or equal to a and lower or equal to b and return a result as an array.
/*
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

// my solution
let originArray = [3, 2, 7, 5, 1, 6, 9, 34, 22, 19];
function filterRange(arr, a, b) {
// return [];  a <= [] <= b
  
  let filteredArr = arr.filter( iterm => (a <= iterm && iterm <= b));
  console.log(`originArray: ${originArray}`);
  console.log(`filterd: ${filteredArr}`);
  return filteredArr
}

// from javascript.info
function filterRangej(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

//filterRange(originArray, 1, 7)


// ====== 3 ====== //
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it 
// all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
/* 
The function should only modify the array. It should not return anything.
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]
*/

// my solution
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    if (v < a || v > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// from javascript.info
function filterRangeInPlacej(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

// console.log(originArray);
// filterRangeInPlace(originArray, 2, 7);
// console.log(originArray);



// ====== 4 ====== //
// Sort in decreasing order
/*
let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10
*/

function sortInDesc(arr) {
  arr
  .sort((a, b) => a - b)
  .reverse();
}


// from javascript.info
/*
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr );
*/

//console.log(originArray);
//sortInDesc(originArray);
//console.log(originArray);



// ====== 4 ====== //
/*
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
Create a function copySorted(arr) that returns such a copy.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

// mine
function copySorted(arr) {
  let copy = arr.slice(0,);
  //console.log(copy);
  return copy
  .sort((a, b) => a - b);
}

// from javascript.info
/*
function copySorted(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted );
alert( arr );
*/

// console.log(originArray);
// copySorted(originArray);
// console.log(originArray);
// console.log(copySorted(originArray));



// ====== 5 ====== //
/*
Create a constructor function Calculator that creates “extendable” calculator objects.
The task consists of two parts.
First, implement the method calculate(str) that takes a string like "1 + 2" in the 
format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
Usage example:

let calc = new Calculator;
alert( calc.calculate("3 + 7") ); // 10

Then add the method addMethod(name, func) that teaches the calculator a new operation. 
It takes the operator name and the two-argument function func(a,b) that implements it.
For instance, let’s add the multiplication *, division / and power **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.
*/

function Calculator() {
  this.Methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  }
  this.calculate = function(str) {
    let splitStr = str.split(' '),
    a = +splitStr[0],
    op = splitStr[1],
    b = +splitStr[2];

    if (!this.Methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.Methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.Methods[name] = func;
  }

}

//let calc = new Calculator;
//console.log(calc.calculate("1 + 3"));
//console.log(calc.calculate("1 - 3"));
//let f = (a, b) => a ** b;
//calc.addMethod("**", f);
//console.log(calc.calculate("2 ** 3"));



// ====== 7 ====== //
/*
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  ... your code

alert( names ); // John, Pete, Mary
*/

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let users = [ john, pete, mary ];
////console.log(users);
//
//// solution 
//let names =  users.map(user => user.name);
////console.log(names);


// ====== 7 ====== //
/*
You have an array of user objects, each one has name, surname and id.
Write the code to create another array from it, of objects with id and fullName, 
where fullName is generated from name and surname.
For instance:
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped =  ... your code ... 

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
*/
//let john = { name: "John", surname: "Smith", id: 1 };
//let pete = { name: "Pete", surname: "Hunt", id: 2 };
//let mary = { name: "Mary", surname: "Key", id: 3 };
//
//let users = [ john, pete, mary ];

// my solution
//let usersMapped =  users.map(function(iterm){
//  return {fullName: iterm.name + " " + iterm.surname, id: iterm.id}
//});

// from javascript.info
//let usersMapped = users.map(user => ({
//  fullName: `${user.name} ${user.surname}`,
//  id: user.id
//}));
//console.log(usersMapped);
//console.log(usersMapped[0].id);
//console.log(usersMapped[0].fullName);



// ====== 8 ====== //
/*
Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
*/

//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let arr = [ pete, john, mary ];
//
// solution
//function sortByAge(arr) {
//  //let narr = arr.sort(function(a, b){return b.age - a.age});
//  //return narr
//
//  //return arr.sort((a, b) => {return a.age - b.age})
//  return arr.sort((a, b) => a.age - b.age)
//}

//console.log(sortByAge(arr));



// ====== 9 ====== //
/*
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];
shuffle(arr);
// arr = [3, 2, 1]
shuffle(arr);
// arr = [2, 1, 3]
shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. 
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

// let arr = [2, 1, 3, 5, 4, 6]
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// 
// }
// 
// shuffle(arr)
// console.log(arr);
// 
// 
// // counts of appearances for all possible permutations
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };
// 
// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }
// 
// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }



// ====== 10 ====== //
// shuffle a array

// let a = [2,3,4,3,5,3,2,22];
// 
// function shuffArray(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]]
//   }
// }
// 
// shuffArray(a);
// console.log(a);
// 
// // counts of appearances for all possible permutations
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };
// 
// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffArray(array);
//   count[array.join('')]++;
// }
// 
// // show counts of all possible permutations
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

// in golang ==================
// package main
// 
// import (
// 	"fmt"
// 	"math"
// 	"math/rand"
// 	"strconv"
// 	"time"
// )
// 
// var PermutNum = make(map[string]int)
// 
// func main() {
// 	var nums = []int{1, 2, 3}
// 	var runTimes = 100000
// 	var tmpStr string
// 
// 	for i := 0; i < runTimes; i++ {
// 		rNums := shuffleSlice(nums)
// 		for _, v := range rNums {
// 			tmpStr += strconv.Itoa(v)
// 		}
// 		PermutNum[tmpStr]++
// 		tmpStr = ""
// 	}
// 	fmt.Printf("123: %v\n", PermutNum["123"])
// 	fmt.Printf("132: %v\n", PermutNum["132"])
// 	fmt.Printf("213: %v\n", PermutNum["213"])
// 	fmt.Printf("231: %v\n", PermutNum["231"])
// 	fmt.Printf("312: %v\n", PermutNum["312"])
// 	fmt.Printf("321: %v\n", PermutNum["321"])
// }
// 
// func shuffleSlice(nums []int) []int {
// 	for i := len(nums) - 1; i > 0; i-- {
// 		rand.Seed(time.Now().UnixNano())
// 		j := int(math.Floor(rand.Float64() * (float64(i) + 1)))
// 		nums[i], nums[j] = nums[j], nums[i]
// 	}
// 	return nums
// }



// ====== 11 ====== //
/* 
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.
The formula for the average is (age1 + age2 + ... + ageN) / N.
For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/
//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 29 };
//
//let arr = [ john, pete, mary ];
//
//function getAverageAge(arr) {
//  let v = arr.reduce((sum, iterm) => {return sum += iterm.age;}, 0);
//  console.log(v);
//  return v/arr.length;
//}
//
//console.log(getAverageAge(arr));



// ====== 12 ====== //
/*
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  // your code
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O
*/

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// function unique(arr) {
//   let res = [];
//   for (let s of arr) {
//     if (!res.includes(s)) {
//      res.push(s)
//     }
//   }
//   return res
// }
// 
// console.log(unique(strings));



// ====== 12 ====== //
/*
Create keyed object from array
importance: 4
Let’s say we received an array of users in the form {id:..., name:..., age... }.
Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);


// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}

Such function is really handy when working with server data.
In this task we assume that id is unique. There may be no two array items with the same id.
Please use array .reduce method in the solution.
*/

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];
function groupById(users) {
  return users.reduce((obj, value) => {obj[value.id]=value; return obj;}, {})
}

console.log(groupById(users));