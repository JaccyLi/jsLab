'use strict';
console.log(new Date());

// 2 0 --> 1
// 2 1 --> 2
// 2 2 --> 2*2
// 2 4 --> 2*2*2*2
function pow(m, n){
    if (n == 0) {
        return 1;
    }
    let k = 1;
    for (let i = 0; i < n; i++) {
       k *=m;
    } 
    return k;
}

console.log(pow(4,2));


// recursive way
function powr(m, n) {
    if (n == 1) {
        return m;
    } else {
        return m * powr(m, n-1);
    }
}

console.log(powr(2,3));

// consice way
function pows(x, n) {
      return (n == 1) ? x : (x * pow(x, n - 1));
}

console.log(pows(3,4));


// Recursive traversals
//Another great application of the recursion is a recursive traversal.
//
//Imagine, we have a company. The staff structure can be presented as an object:
//
let company = {
  sales: [{
    name: 'John',
    salary: 1000
  }, {
    name: 'Alice',
    salary: 1600
  }],

  development: {
    sites: [{
      name: 'Peter',
      salary: 2000
    }, {
      name: 'Alex',
      salary: 1800
    }],

    internals: [{
      name: 'Jack',
      salary: 1300
    }]
  }
};

function traverse(company) {
	if (Array.isArray(company)) {
      return company.reduce((acc, current) => acc + current.salary, 0);
	} else {
	let sum = 0;
	for (let sub of Object.values(company)) {
      sum += traverse(sub);
	}
	  return sum;
	}
}


console.log(traverse(company));

