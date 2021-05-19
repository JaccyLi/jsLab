let id = Symbol("id");

let user = {
    name: "jack",
    age: 22,
    [id]: 123321,
};

let s1 = Symbol("s1 symbol");
let s2 = Symbol("s1");

user[s1] = "hi";
user[s2] = "hello";

//alert(user[s1]);
//alert(user[s2]);
//alert(user[id]);

// for loop ignore Symbols
for (let k in user) {
    alert(k);
}

// Object.assign() copy Symbol attr
let cloneUser = Object.assign({}, user);
alert( "direct: " + cloneUser[id] );