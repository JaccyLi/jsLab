function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        console.log("value starting is: " + this.value);
        this.value += +prompt("Input next nu: ", 0);
    };
    this.showRes = () => {
        console.log("value now is: " + this.value);
    };
}

let acc1 = new Accumulator(23);
acc1.read();
acc1.read();
acc1.read();
acc1.showRes();