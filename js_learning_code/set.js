'use strict';

// Set
/*
A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
Its main methods are:
new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
*/

let visitors = [
    "jack", "Jhon", "mike", "steve", "mike"
];

let set = new Set(visitors);

console.log(set, set.size);
set.add("steve");
console.log(set, set.size);
set.add("newGuy");
console.log(set, set.size);
set.delete("jack");
console.log(set, set.size);
console.log(set.has("Jhon"));
console.log(set.has("notExist"));
//set.clear();
//console.log(set, set.size);

set.forEach(
    (value, valueAgain, set) => {
        console.log(value, valueAgain, set);
    }
);

// all return object, for compatible with map
console.log(set.keys(), set.values(), set.entries());




/*
Summary:
Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key, returns true if key existed at the moment of the call, otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
*/
