'use strict';

let start = new Date();
console.log(new Date(0));

console.log(new Date(24 * 3600 * 31 * 1000));

console.log(new Date(-24 * 3600 * 31 * 1000));

console.log(new Date("2002-12-22 12:13:14"));

let date = new Date();

console.log(date);
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getMilliseconds()}`);
date.setHours(date.getHours() + 2);
console.log(date);

console.log(new Date(2011, 0, 1, 2, 3, 4, 567));
let end = new Date();

console.log(`${end - start} ms`);
