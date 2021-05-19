'use strict';

/*
Object.keys, values, entries
For plain objects, the following methods are available:

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.
*/
//Please note the distinctions (compared to map for example):

/*
              Map	        Object
Call syntax	  map.keys()	Object.keys(obj), but not obj.keys()
Returns	      iterable	    “real” Array
*/

// hello !== hello2 --> true
let hello = Symbol("hello");
let hello2 = Symbol("hello");
if (hello !== hello2) {
    console.log(true);
}

let man = {
    name : "jad",
    age : 17,
};
man[hello] = "hi";

// doesn't work
console.log(man.hello);

// worked
console.log(man[hello]);

// dont return Symbol keys
console.log(Object.keys(man));
console.log(Object.values(man));
console.log(Object.entries(man));

// return allkeys include Symbol
console.log(Reflect.ownKeys(man));

// return only Symbol keys
console.log(Object.getOwnPropertySymbols(man));


// transform obj
let growMan = Object.fromEntries(
    Object.entries(man).map(
        ([k, v]) => [k, ++v]
    )
);

console.log("grow man: ", growMan);


// TASK
/*
Sum the properties
importance: 5
There is a salaries object with arbitrary number of salaries.
Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
If salaries is empty, then the result must be 0.
For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "jack": 500,
};
let noSalaries = {};

function sumSalaries(s) {
    let sum = 0
    if (Object.values(s).length == 0) {
        return 0
    }
    for (let salary of Object.values(s)) {
        sum += salary
    }
    return sum
}
console.log(Object.values(salaries));
console.log("sum: ", sumSalaries(salaries));
console.log("sum no salaries: ", sumSalaries(noSalaries));

//Or, optionally, we could also get the sum using Object.values and reduce:

// reduce loops over array of salaries,
// adding them up
// and returns the result
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}
console.log("reduce: ", sumSalaries(salaries));


// TASK
/*
Count properties
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.
*/

let ownAttr = Symbol("nobody");
let user = {
  name: 'John',
  age: 30
};
user[ownAttr] = "can't say";

function count(obj) {
    let cnt = 0
   for (let k of  Object.keys(obj)) {
       cnt++
   }
   return cnt
}

function countAll(obj) {
    let cnt = 0
   for (let k of  Reflect.ownKeys(obj)) {
       cnt++
   }
   return cnt
}

console.log("count: ", count(user));
console.log("count2: ", Object.keys(user).length);
console.log("allKey: ", Reflect.ownKeys(user));
console.log("allCount: ", countAll(user));