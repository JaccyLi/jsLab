'use strict';

/*
Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。

它的方法和属性如下：

new Map() —— 创建 map。
map.set(key, value) —— 根据键存储值。
map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
map.delete(key) —— 删除指定键的值。
map.clear() —— 清空 map。
map.size —— 返回当前元素个数。
*/
let m = new Map();

m.set(1, "I'm num 1");
m.set("I'm a key", 20);
m.set(false, "wrong");

console.log(m.size);
console.log(m.get(1));
console.log(m.get("I'm a key"));
console.log(m.has(false));
console.log(m.delete(false));
console.log(m.has(false));

// Map 还可以使用对象作为键
let xiao = {name: "xiao.liu", age: 24};
let missCount = new Map();
missCount.set(xiao, Infinity);
console.log(missCount.get(xiao));
console.log(missCount);

let mCount = {}; // plain object
mCount[xiao] = 999;
console.log(mCount[xiao]);
console.log(String(xiao));
console.log(mCount["[object Object]"]);
/*
Map 是怎么比较键的？
Map 使用 SameValueZero 算法来比较键是否相等。
它和严格等于 === 差不多，但区别是 NaN 被看成是等于 NaN。所以 NaN 也可以被用作键。

这个算法不能被改变或者自定义。
*/

//链式调用
//每一次 map.set 调用都会返回 map 本身，所以我们可以进行“链式”调用：

m.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');
console.log(m);

/*
Map 迭代
如果要在 map 里使用循环，可以使用以下三个方法：
迭代的顺序与插入值的顺序相同。与普通的 Object 不同，Map 保留了此顺序。

map.keys() —— 遍历并返回所有的键（returns an iterable for keys），
map.values() —— 遍历并返回所有的值（returns an iterable for values），
map.entries() —— 遍历并返回所有的实体（returns an iterable for entries）[key, value]，for..of 在默认情况下使用的就是这个
*/

let map = new Map(
    [[0, "jack"],[1, "ma"]]
)
console.log(map);
for (let k of map.keys()) {
    console.log(k);
}
for (let v of map.values()) {
    console.log(v);
}
for (let e of map.entries()) {
    console.log(e);
}

map.set(3, "suo");
// using map.entries()
for (let e of map) {
    console.log(e);
}

// Map has a built-in forEach method, similar to Array:
map.forEach((v, k, map) => {
    alert(`key ${k}, value ${v}`);
});

let arr = [
    [0, "I'm jack"],
    ["name", "jack"],
    ["age", 20]
];
let newMap = new Map(arr);
newMap.forEach((v, k, newMap) => {
    console.log(`key ${k}, value ${v}`);
});


// Object.entries(obj) ----> create Map from a Object
let obj = {
    name: "jack",
    age: 24,
    liveIn: "Beijing",
};

let objMap = new Map(Object.entries(obj));
// Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
console.log(objMap);
for (let k of objMap.keys()) {
    console.log(k);
}
for (let v of objMap.values()) {
    console.log(v);
}


// Object.fromEntries(arr) ---> create obj from array
let p = Object.fromEntries([
    ["name", "jack"],
    ["age", 20]]
)
console.log(`fromentries obj: ${p}`);
let paireMap = new Map(Object.entries(p))
console.log(`paireMap: ${paireMap}`);

for (let e of paireMap.entries()) {
    console.log(`paireMap obj: ${e}`);
}