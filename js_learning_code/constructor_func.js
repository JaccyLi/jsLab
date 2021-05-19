// constructor function

function User(name) {
  this.name =  name;
  this.isAdmin = false;
}

let u1 = new User("Jack");
let u2 = new User("Jhon");

u2.isAdmin = true;

alert(u1.name);
alert(u1.isAdmin);
alert(u2.name);
alert(u2.isAdmin);