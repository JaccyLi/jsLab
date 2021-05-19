function Calculator() {
    this.read = function() {
        this.nu1 = +prompt("input nu1: ", 0);
        this.nu2 = +prompt("input nu2: ", 0);
    };
    this.sum = function() {
        return this.nu1 + this.nu2;
    };
    this.mul = function() {
        return this.nu1 * this.nu2;
    };
}


let cal1 = new Calculator();

cal1.read();
console.log(cal1.nu1 + " : " + cal1.nu2)
console.log("sum: " + cal1.sum());
console.log("mul: " + cal1.mul());