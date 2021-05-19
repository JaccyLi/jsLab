let stuff = {
  name: "jack",
  sayHi() {
    alert(`HI!, I'm ${this.name}, and I live in ${this.location}.`);
  },
  sayHello() {alert("HELLO!");},
  width: 200,
  height: 300,
  salary: 30000,
  location: "Beijing",
  skills: {
    Linux: "skilled",
    Docker: "mastered",
    Kubernetes: "familiar",
  },
};

stuff.sayHi();
stuff.sayHello();
//for (let key in stuff2) {
//  alert(key)
//}

function makeUser() {
  return {
    name: "jj",
    sayjj () {
      return this
    },
  }
}

let user = makeUser;
alert(user().sayjj().name)