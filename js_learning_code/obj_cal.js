let calculator = {
  read() {
    this.a = +prompt("input v1: ", 0);
    this.b = +prompt("input v2: ", 0);
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );