setInterval(2000)

let user = {
    name: "Jack",
    age: 24,
    location: "Beijing",
    house: true,
    peers: {
        p1: "Michael",
        p2: "Jhon",

    },
    walking() {
        alert("I'm walking in the rain...");
    },
    imarrow() {
      let arrow = () => {
          alert("I'm an arrow...");
      }
      arrow();
    },
    sing() {
        alert("I'm singing in the rain...");
    },
    logging: function() {
        alert("I'm logging in the console...")
        console.log("I'm logging in the console...")
    }
};

let admin = {
    name: "Jaccy",
    age: 25,
    location: "Beijing",
    house: false,
}

function walk() {
    alert("I'm walking.");
}

user.walk = walk;

user.sayHi = function() {
    alert("Hi, my name is " + this.name);
}

admin.f = user.sayHi;
admin.f();
admin['f']();
user['sayHi']();
user.imarrow();