function sayHi() {
      alert( "Hello" );
}

function sayBy() {
      alert( "By" );
}

function ask(question, hi, by) {
    if (confirm(question)){
        hi()
    } else {
        by()
    }

}
ask('Hi or By?', sayHi, sayBy)
