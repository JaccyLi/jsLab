'use strict';

// binary
console.log(0b1010101100);

// hex
console.log(0xffee);

// octal
console.log(0o1234567);

// num.toString(base);
console.log(typeof((13.345).toString()));
console.log((123.3456).toString());
console.log(0o71.toString(2)); //57
console.log(0o71.toString(10)); //57

console.log(33421..toString());

console.log("floor:------");
console.log(Math.floor(3.4));
console.log(Math.floor(3.5));
console.log(Math.floor(3.6));
console.log("ceil:------");
console.log(Math.ceil(3.4));
console.log(Math.ceil(3.5));
console.log(Math.ceil(3.6));
console.log("round:------");
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.round(3.6));
console.log("trunc:------");
console.log(Math.trunc(3.4));
console.log(Math.trunc(3.5));
console.log(Math.trunc(3.6));

console.log("floor:------");
console.log(Math.floor(-3.4));
console.log(Math.floor(-3.5));
console.log(Math.floor(-3.6));
console.log("ceil:------");
console.log(Math.ceil(-3.4));
console.log(Math.ceil(-3.5));
console.log(Math.ceil(-3.6));
console.log("round:------");
console.log(Math.round(-3.4));
console.log(Math.round(-3.5));
console.log(Math.round(-3.6));
console.log("trunc:------");
console.log(Math.trunc(-3.4));
console.log(Math.trunc(-3.5));
console.log(Math.trunc(-3.6));

// num.toFixed()
console.log("toFixed():------");
console.log((123.4544556).toFixed(4));
console.log((123.24).toFixed(1));
console.log((123.25).toFixed(1));
console.log((-123.24).toFixed(1));
console.log((-123.25).toFixed(1));
console.log((-123.26).toFixed(4));
