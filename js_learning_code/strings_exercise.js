'use strict';

function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1) ;
    return str
}

//ucFirst("john");
//if (ucFirst("john") == "John") {
//    console.log(true);
//}

function checkSpam(str2) {
    let s1 = "xxx";
    let s2 = "viagra";
    if (str2.includes(s1) || str2.includes(s2)) {
        return true
    } else {
        return false
    }
}

// console.log(checkSpam("buying viagra"));
// console.log(checkSpam("buying a toll"));
// console.log(checkSpam("free xxx online"));

function truncate(str, int) {
    if (str.length <= int) {
        console.log(str);
    } else {
        str = str.slice(0, int - 1) + "\u2026"; // \u2026 --> ...
        console.log(str);
    }

}


//console.log("\u2026");
//truncate("hello i'm a handsome man!", 4);
//truncate("hello i'm a handsome man!", 20);

//function extractCurrencyValue(str) {
//    str = str.slice(1);
//    return Number(str);
//}
function extractCurrencyValue(str) {
    return +str.slice(1);
}

//console.log(extractCurrencyValue("$234242"));
//console.log("$");