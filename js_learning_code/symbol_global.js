let i = Symbol("i");
let iAgain = Symbol("i");

// global Symbol
let id = Symbol.for("id");
let idAgain = Symbol.for("id");
let idOther = Symbol.for("iddi") // description is "iddi", different

let user = {
    name: "jack",
    [idOther]: 223,
};
alert(i === iAgain);
alert(id === idAgain);
alert(id === idOther);

// Symbol.keyFor() return a symbol's description
alert(Symbol.keyFor(id));
alert(Symbol.keyFor(idAgain));
alert(Symbol.keyFor(idOther));

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
alert( Symbol.keyFor(localSymbol) ); // undefined, not global

alert( localSymbol.description ); // name