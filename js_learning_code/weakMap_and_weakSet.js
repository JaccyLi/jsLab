'use strict';

// WeakMap and WeakSet
/*
WeakMap has only the following methods:

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)
*/

let xiao = {name: "xiao.liu"};
let suo = {name: "suo.li"};
let arr = [ xiao ];
xiao = null;
console.log(arr[0]);

xiao = {name: "xiao.liu"};
let weakMap = new WeakMap();
weakMap.set(xiao, "gf");
if (weakMap.has(xiao)) {
    weakMap.set(suo, "bf");
}
console.log(weakMap.has(suo));
suo = null;
console.log(weakMap.has(suo));
console.log(suo);


// using WeakMap to save temp additional data something
let visitorCount = new WeakMap();

function count(user) {
    let c = visitorCount.get(user) || 0;
    return visitorCount.set(user, ++c);
}

suo = {name: "suo.li"};
console.log(count(suo));
console.log(count(suo));
console.log(count(suo));
console.log(count(suo));
suo = null;
console.log(visitorCount.has(suo));


// using WeakMap to cache something
let cacheMap = new WeakMap();

function cache(obj) {
    if (!cacheMap.has(obj)) {
        let res = obj;
        cacheMap.set(obj, res);
    }
    return cacheMap.get(obj);
}

let obj = {name: "xiao.liu"};
console.log(cache(obj));
let get1 = cache(obj);
let get2 = cache(obj);
console.log("get1: ", get1);
console.log("get2: ", get2);
obj = null;


/*
WeakSet
WeakSet behaves similarly:

It is analogous to Set, but we may only add objects to WeakSet (not primitives).
An object exists in the set while it is reachable from somewhere else.
Like Set, it supports add, has and delete, but not size, keys() and no iterations.
*/
//Being “weak”, it also serves as an additional storage. But not for an arbitrary data, but rather for “yes/no” facts. A membership in WeakSet may mean something about the object.

//For instance, we can add users to WeakSet to keep track of those who visited our site:

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet will be cleaned automatically
//The most notable limitation of WeakMap and WeakSet is the absence of iterations, and inability to get all current content. That may appear inconvenient, but does not prevent WeakMap/WeakSet from doing their main job – be an “additional” storage of data for objects which are stored/managed at another place.