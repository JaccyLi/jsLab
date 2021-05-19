function User() {
  this.name = "jack";
  let sayHi = () => {
    alert("hI, mY nAME Is " + this.name);
  };
  sayHi();
  alert(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // function User { ... }