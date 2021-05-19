'use strict';

let single = 'single quoted string';
let double = "double quoted string";
let backticks = `backticks`;

console.log(single, double, backticks);

let sum = (a, b) => {return a + b};
let aa = 12;
let bb = 23.3;
console.log(`sum of ${aa} and ${bb} is ${sum(aa, bb)}`);

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
console.log(guestList);

guestList = "Guests: \n* John \n* Pete \n* Mary";
console.log(guestList);

console.log("\x5A"+"\x7A");

console.log("\u{1F60D}".length);
console.log("hello".length);
console.log("你好".length);

for (let c of "hello") {
    console.log(c);
}
for (let c of "你好") {
    console.log(c);
}

console.log('Inter'.toUpperCase());
console.log('Inter'[4].toUpperCase());
console.log('Inter'.toLowerCase());
console.log('Inter'[0].toLowerCase());

console.log('I\'m suousoli'.indexOf("li"));

let str = "hello hi hola ha";
for (let i = 0; i < str.length; i++) {
console.log(`the index ${i} of \"${str}\" is ${str[i]}`);
}

console.log(`str[]: the index 1000 of \"${str}\" is ${str[1000]}`);
console.log(`str.charAt(): the index 1000 of \"${str}\" is ${str.charAt(1000)}`);

console.log( ~2 ); // -3, the same as -(2+1)
console.log( ~1 ); // -2, the same as -(1+1)
console.log( ~0 ); // -1, the same as -(0+1)
console.log( ~-1 ); // 0, the same as -(-1+1)


// includes, startsWith, endsWith
console.log('hello'.includes('llo'));
console.log('Get element by Id'.includes('element'));
console.log('Get element by Id'.includes('id'));
console.log('hello'.startsWith('he'));
console.log('hello'.startsWith('he', 2));
console.log('hello'.startsWith('o', 3));
console.log('Get element by Id'.endsWith('Id'));
console.log('Get element by Id'.endsWith('element', 10));

// slice
console.log("stringify".slice(0, 3));
console.log("stringify".slice(0, ));
console.log("stringify".slice(5));
console.log("stringify".slice(3,6)); // [a, b)
console.log("stringify".slice(-6,-3)); // [a, b)
let str2 = "stringify";
// str.substring() just like str.slice()
console.log(str2.substring(str2.length, str2.length-3));
for (let i=0; i < str2.length; i++) {
    console.log(str2.substring(i, str2.length));
}
for (let i=0; i <= str2.length; i++) {
    console.log(str2.substring(str2.length-i, str2.length));
}

// str.substr() need a length as second param
console.log("stringify".substr(3, 3)); // str.sbustr(startPosition, substrLength)

for (let c of "hello") {
    console.log(c.codePointAt(0));
    console.log(String.fromCodePoint(c.codePointAt(0)));
}

console.log('hello'.localeCompare('hi')); // h == h --> e < i --> -1
console.log('hillo'.localeCompare('hey')); // h == h --> i > e --> 1
console.log('hola'.localeCompare('hola')); // hola == hola --> 0

console.log("你好啊".codePointAt(0));
console.log("你好啊".codePointAt(1));
console.log("你好啊".codePointAt(2));
console.log("你好啊".codePointAt(3));
console.log("你好啊".codePointAt(8)); // 0-8, 3byte each char
console.log("你好啊".codePointAt(9)); //undefined