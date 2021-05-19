let move = {
    step: 0,
    forward() {
        this.step++;
    },
    backward() {
        this.step--;
    },
    showStep() {
        alert("I'm at step: " + this.step);
    }
};

let chainMove = {
    step: 0,
    ahead() {
        this.step++;
        return this;
    },
    back(){
        this.step--;
        return this;
    },
    show() {
        alert("I'm at step: " + this.step);
    },
};

//for (let i = 0; i < 30; i++) {
//    move.forward();
//    if (i % 3 == 0) {
//        move.backward();
//    }
//}
//move.showStep();

chainMove.ahead().ahead().ahead().back();
chainMove.show();