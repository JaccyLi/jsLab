'use strict';

// exercise of map and set

// Filter unique array members
function unique(arr) {
    let set = new Set();
    let a = [];
    for (let iterm of arr) {
        set.add(iterm);
    }
    //console.log(set);
    for (let v of set.values()) {
        a.push(v);
    }
    //console.log(a);
    return a;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );
// solution from javascript.info
//function unique(arr) {
//  return Array.from(new Set(arr));
//}

// Filter anagrams
/*
Anagrams are words that have the same number of same letters, but in different order.

For instance:

nap - pan
ear - are - era
cheaters - hectares - teachers
*/
let words = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
let sortedWords = [];
let cleanedSet = new Set();

for (let word of words) {
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    console.log("sorted: ", sorted);
    sortedWords.push(sorted);
}
console.log("sortedWords: ", sortedWords);

for (let w of sortedWords) {
    cleanedSet.add(w);
}
console.log(cleanedSet);
// from javascript.info
/*
function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word.toLowerCase().split('').sort().join(''); // (*)
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
*/

// Iterable keys
// We’d like to get an array of map.keys() in a variable 
// and then apply array-specific methods to it, e.g. .push.
//But that doesn’t work:
/*
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
keys.push("more");
//Why? How can we fix the code to make keys.push work?
*/

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
console.log("keys: ", keys);
keys.push("age");
console.log("keys: ", keys);
