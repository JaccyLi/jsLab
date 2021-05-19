'use strict';

// Destructuring assignment
// 解构赋值（destructuring assignment） 是一种可以从数组或对象中提取数据的语法，该语法模仿了数组字面量和对象字面量语法。
let users  = ["jack", "jane"];
let [man, woman] = users;
console.log("users: ", users);
console.log("man: ", man, "woman: ", woman);

let [fname, lname] = "jaccy li".split(' ');
console.log("fullName: ", fname, lname);

// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:
// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log( title ); // Consul

// Works with any iterable on the right-side
//…Actually, we can use it with any iterable, not only arrays:
let [a,b,c] = 'abc';
console.log("a, b, c: ", a, b, c);
let [one,two,three] = new Set([1,2,3]);
console.log("one, two, three: ", one, two, three);
let [v1, v2, v3] = new Map([["p1","jack"], ["p2", "jane"], ["p3", "xiao"]]);
console.log("v1, v2, v3: ", v1, v2, v3);

//Assign to anything at the left-side
//We can use any “assignables” at the left side.
//For instance, an object property
let u = {};
[u.Name, u.age, u.b] = "liu xiao yes".split(' ');
console.log("you: ", u);

// Looping with .entries()
//In the previous chapter we saw the Object.entries(obj) method.
//We can use it with destructuring to loop over keys-and-values of an object:

u = {
    name: "xiao.liu",
    age: 24,
    mgf: true,
}

for (let [k, v] of Object.entries(u)) {
    console.log(k, v)
}
// also Map
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, then age:30
}


// Swap variables trick
// A well-known trick for swapping values of two variables:
let admin = "suo.li";
let superUser = "xiao.liu";
let idAdmin = 1;
let idSu = 2;
[admin, superUser, idAdmin, idSu] = [superUser, admin, idSu, idAdmin];
console.log("admin: ", admin, "Super: ", superUser);
console.log("idAdmin: ", idAdmin, "idSu: ", idSu);


//The rest ‘…’
//If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":

let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1); // Julius
console.log(name2); // Caesar
// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
//The value of rest is the array of the remaining array elements. We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.


// Default value

let name = "";
u = {};
[u.Name, u.Age] = name;
console.log("u: ", u);
[u.Name = "xiao.liu", u.Age = 24] = name;
console.log("u: ", u);
name = ["suo"];
console.log("name", name);
[u.Name = prompt("name?"), u.Age = prompt("age?")] = name;
console.log("u: ", u);



let NameKeyValue = "cake-autoscale-instance-member" + new Date()
console.log(NameKeyValue);

let date = Date.parse('2012-01-26T13:51:50.417-07:00');
alert(date);1