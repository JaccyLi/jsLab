'use strict';
console.log(new Date());

// recursive homework

// give n,  calculate "1+2+3+...+n"
// for loop
//function sumTo(n) {
//    let sum = 0;
//    for (let i = 1; i <=n; i++) {
//        sum += i;
//    }
//    return sum;
//}

// recursive
//function sumTo(n) {
//    if (n == 1 ){
//        return n;
//    }
//    if (n > 1 ){
//    return n + sumTo(n - 1);
//    }
//}
//

// arithmetic progression 
//function sumTo(n) {
//    if (n == 1) return n;
//
//    return n*(1 + n)/2;
//}
//console.log(sumTo(5));
//console.log(sumTo(1));
//console.log(sumTo(50));
//console.log(sumTo(5000));
    
// calculate factoria
//function fac(n) {
//    if (n == 0 || n == 1) return 1;
//    if (n > 1) {
//    return n * fac(n - 1);
//    } 
//    return "must a positive number";
//}
//console.log(fac(3));
//console.log(fac(0));
//console.log(fac(-1));

// Fibonacci numbers 
function fib(n) {
    if (n == 0 || n == 1) return n;
    if (n > 1){
    return fib(n - 1) + fib(n - 2);
    }
    return "must ge 0";
}

console.log(fib(3));
console.log(fib(7));

//Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
      value: 1,
      next: {
              value: 2,
              next: {
                        value: 3,
                        next: {
                                    value: 4,
                                    next: null
                                  }
                      }
            }
};
//Write a function printList(list) that outputs list items one-by-one.
//    Make two variants of the solution: using a loop and using recursion.
//    What’s better: with recursion or without it?
//function printList(list) {
//        let tmp = list;
//     while (tmp) {
//         console.log(tmp.value);
//         tmp = tmp.next;
//         }
// }
//
//printList(list);

// recursive way
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

printList(list);

//Output a single-linked list in the reverse order
//importance: 5
//Output a single-linked list from the previous task Output a single-linked list in the reverse order.
//Make two solutions: using a loop and using a recursion.

//Using a recursion
//The recursive logic is a little bit tricky here.
//We need to first output the rest of the list and then output the current one:

let listt = {
      value: 1,
      next: {
              value: 2,
              next: {
                        value: 3,
                        next: {
                                    value: 4,
                                    next: null
                                  }
                      }
            }
};

function printReverseList(list) {
      if (list.next) {
              printReverseList(list.next);
            }
      console.log(list.value);
}

printReverseList(listt);
//Using a loop
//The loop variant is also a little bit more complicated then the direct output.
//    There is no way to get the last value in our list. We also can’t “go back”.
//    So what we can do is to first go through the items in the direct order and remember them in an
