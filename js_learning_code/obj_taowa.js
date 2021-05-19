'strict mode';
function makeUser() {
  return {
    name: "John",
    ref() {
        return {
            name: this.name,
            age: 222,
            inref() {
                return this.age
            }
        };
    },
  };
}

let user = makeUser();

alert( user.ref().name ); // What's the result?
alert( user.ref().inref() ); // What's the result?