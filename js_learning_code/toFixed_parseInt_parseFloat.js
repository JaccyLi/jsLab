'use strict';

// infinity
console.log(123e321);

// 0.1 + 0.2
console.log(0.1 + 0.2);
console.log(0.1.toFixed(20));
console.log(0.2.toFixed(20));
console.log(0.3.toFixed(22));
console.log(0.4.toFixed(23));
console.log(0.5.toFixed(24));
console.log(0.6.toFixed(25));
console.log(0.7.toFixed(26));
console.log(0.8.toFixed(26));
console.log(0.9.toFixed(26));
console.log(10.0.toFixed(26));

console.log(0);
console.log(typeof(-0));

console.log(isNaN(Number("hello")));
console.log(isNaN(Number("123")));

// The value NaN is unique in that it does not equal anything, including itself
console.log(NaN === NaN);
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN
console.log( isFinite(Infinity) ); // false, because a special value: Infinity

let nu = prompt("input a number: ", '');
console.log( isFinite(nu) );

console.log(Object.is(1, 1));

console.log(parseInt("233&"));
console.log(parseInt("100%"));
console.log(parseInt("12$1.100%"));
console.log(parseInt(" 1 2$1.100% "));

console.log(parseFloat("123.344$523"));
console.log(parseFloat("0.2@#324"));

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, without 0x also works
console.log( parseInt('2n9c', 36) ); // 123456
