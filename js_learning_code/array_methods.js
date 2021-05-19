'use strict';

let arr1 = ["I'm", "going", "home"];
console.log(arr1);

// delete obj.key removes a value by the key
delete arr1[0];
console.log(arr1);
console.log(arr1.length);

// now length is arr1.length - 1
arr1.shift();
console.log(arr1);
console.log(arr1.length);

// splice method
// arr1.splice(start[, deleteCount, elem1, ..., elemN])
/*
It modifies arr starting from the index start: removes deleteCount elements 
and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
*/ 
let arr2 = ["I'm", "Studying", "JavaScript", "Now", "!"];
console.log(arr2);
arr2.splice(3, 1); // from index 3 remove 1 element                     
console.log(arr2); //  ["I'm", "Studying", "JavaScript", "!"]
arr2.splice(1, 2, "Dancing"); // remove index 1,2 element, and replace with "Dancing"                                
console.log(arr2); // ["I'm", "Dancing", "!"]
//let removed = arr2.splice(1, 1); // return removed element as a array
//console.log(removed); // ["Dancing"]

// add elements to arr2
arr2.splice(arr2.length, 0, "along", "with", "JavaScript");
console.log(arr2); // ["I'm", "Dancing", "!", "along", "with", "JavaScript"]
// allow negative indexes
arr2.splice(-1, 0, "the", "popular");
console.log(arr2);


// slice method
/*
It returns a new array copying to it all items from index start to end (not including end). 
Both start and end can be negative, in that case position from array end is assumed.
It’s similar to a string method str.slice, but instead of substrings it makes subarrays.
*/
let arr3 = ["s", "t", "r", "i", "n", "g"];
console.log(arr3.slice(0, 3));  // ["s", "t", "r"]
console.log(arr3.slice(-3)); // ["i", "n", "g"]
console.log(arr3.slice(0, )); // ["s", "t", "r", "i", "n", "g"]
// copy a array to make a tmp array
let arrtmp = arr3.slice();
console.log(arrtmp);


// concat method
// arr.concat(arg1, arg2...)
/*
The method arr.concat creates a new array that includes values from other arrays 
and additional items.
It accepts any number of arguments – either arrays or values.
The result is a new array containing items from arr, then arg1, arg2 etc.
If an argument argN is an array, then all its elements are copied. Otherwise, 
the argument itself is copied.
*/
let arr4 = [0, 1];
console.log(arr4.concat(2,3)); // two args
console.log(arr4.concat([2,3])); // a array as a arg
console.log(arr4.concat([2, 3.5],[3, 3.5])); // two arrays as two args
console.log(arr4.concat([2, 3.5],[3, 3.5], 4, 4.24)); // mix type of args

// array like obj will be concated as whole
let arrayLikeObj = {
    func: function(str){console.log("say: ", str);},
    name: "jack",
    id: "001",
    1: "hi"
}
console.log(arr4.concat(arrayLikeObj));
arr4 = arr4.concat(arrayLikeObj); // arrayLikeObj is the last element of arr4
arr4[arr4.length-1].func("hello");
/*
But if an array-like object has a special 
Symbol.isConcatSpreadable property, then it’s treated as an array by concat: 
its elements are added instead:
*/
let arrayLikeObj2 = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};
console.log(arr4.concat(arrayLikeObj2));

// forEach method
/*
arr.forEach(function(item, index, array) {
  // ... do something with item
});
*/
let arr5 = [1, 2, 3, "for", "Each"];
//arr5.forEach(alert);
arr5.forEach((value, index, arr) => {
    console.log(`${value} is at index ${index} in ${arr}`);
    if (typeof(value) === typeof(0)) {
        value += 1
    } else if (typeof(value) === typeof("hi")) {
        arr5[arr5.indexOf(value)] = value.slice(0, 2) + "ook"
    }
});
console.log(arr5);


// indexOf/lastIndexOf and includes
/*
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.
*/
let arr6 = [0, 3, 1, "hi", "JunShan", "hello", "hi", "Dashan", true];
console.log(arr6.indexOf(true));
console.log(arr6.indexOf("JunShan"));
console.log(arr6.indexOf("Dashan"));
console.log(arr6.indexOf(3));
console.log(arr6.lastIndexOf("hi")); // 6

// NaN
const nanArr = [NaN];
console.log(nanArr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)

// includes correctly handles NaN
console.log(nanArr.includes(NaN)); // true


// find and findIndex
/*
find an object with spedific condition
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});
*/

let users = [
    {id: 0, name: "jack ma"},
    {id: 1, name: "suosuo"},
    {id: 2, name: "x.l"},
];

// find return the obj item if true, otherwise return undefined
console.log(
    users.find(
        (item, index) => item.name == "x.l"
    )
);

let girl = users.find(
        (item, index)  => index == 2
    )
console.log(`Gf is ${girl.name}`);

// findIndex return -1 if falsy, otherwise return the obj item index
/* let result = arr.find(function(item, index, array) {
  // if true is returned, index is returned and iteration is stopped
  // for falsy scenario returns -1
});
*/
console.log(
    users.findIndex((item, index) =>  item.name == "x.l")
)

let suo = users.findIndex((item, index) =>  item.name == "suosuo")
console.log(`Bf is ${users[suo].name}`);

// filter 
// The syntax is similar to find, but filter returns an array of all matching elements:
/*
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});
*/

let couple = users.filter(item => item.id > 0);
console.log(`they are ${couple[0]} and ${couple[1]}`);
console.log(`couple is ${couple[0].name} and ${couple[1].name}`);

for (let key in couple[0]) {
    console.log(key);
    console.log(typeof(key));
    console.log(couple[0][key]); // using dot . will return undefined
}



// map 
/*
The arr.map method is one of the most useful and often used.
It calls the function for each element of the array and returns the array of results.
The syntax is:
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});
*/

let l = ["jack ma", "michael", "albert"];
let lengths = l.map(i => i.length);
let ltype = l.map(i => i + "-suffix");
console.log(lengths[0], typeof(lengths));
console.log(ltype);


// sort
/*
The call to arr.sort() sorts the array in place, changing its element order.
It also returns the sorted array, but the returned value is usually ignored, as arr itself is modified.
*/

let nums = [1, 15, 2, 33];
let newnums = nums.sort();
console.log(newnums);
function compareNum(first, second) {
  console.log(`now first is ${first}, second is ${second}`);
  // first > second --> sort
  if (first > second) return 1;
  if (first == second) return 0;
  // first < second --> not sort
  if (first < second) return -1;
}
let cnewnums = nums.sort(compareNum);
console.log(cnewnums);
console.log(cnewnums.reverse());

console.log([1,22,33,41,0,2,11,5,6].sort((a, b) => a - b));

// split and join

let commaStr = "stevenux, suosuoli.cn, xiao.liu";
let strList = commaStr.split(', ');
console.log(strList);
let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);
console.log(arr); // Bilbo, Gandalf
let strListChars = commaStr.split('');
console.log(strListChars);

console.log(strList.join(";"));
console.log(strListChars.join("-"));

// reduce reduceRight

let nus = [1,2,3,4];
// give a initial value 0
let v = nus.reduce((sum, iterm) => {return sum += iterm;}, 0);

   // will take the first element as the initial value
// let v = nus.reduce((sum, iterm) => {return sum += iterm;});
console.log(v);



// Array.isArray

console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray("hee"));



// thisArg
//arr.find(func, thisArg);
//arr.filter(func, thisArg);
//arr.map(func, thisArg);
// ...
// thisArg is the optional last argument

let studyAge = {
  minAge: 7,
  maxAge: 13,
  canEnroll(stu) {
    return stu.age >= this.minAge && stu.age < this.maxAge;
  },
};

let stus = [
  {name: "jack", age: 4},
  {name: "xiao.liu", age: 8},
  {name: "stevenu", age: 10},
  {name: "albert", age: 14},
];

console.log(stus.filter(studyAge.canEnroll, studyAge));