let user = {
    name: "Jack",
    money: "100300",

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

let user2 = {name: "John"};

alert(user2); // [object Object]
alert(user2.valueOf()); // true


alert(user);
alert(+user);
alert(user + 3000);