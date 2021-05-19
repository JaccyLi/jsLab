'use strict';

console.log(new Date());

// do not use json
let user = {
    name: "jack", 
    age: 24,
    live: "Beijing",
    toString() {
        return `"name": ${this.name}, "age": ${this.age}, "live": ${this.live}`
    }
};

console.log(user);
console.log(user.toString());

// using json

let stu = {
    name: "leslie",
    hometown: "Hongkong",
    bigStar: true,
    bio: true,
    wife: null,
    skills: ["panio", "Peking Opera", "actor", "misician"],
    family: {
        f1: {relation: "dad", age: 56, alive: false},
        f2: {relation: "mom", age: 54, alive: true},
    },
};

console.log(stu);
console.log(JSON.stringify(stu));
let info = JSON.stringify(stu, null, 2);
console.log(info);
let jsonObj = JSON.parse(info);
console.log("jsonObj: ", jsonObj);
console.log("name: ", jsonObj.name);

let infoL = JSON.stringify(stu, ["name", "hometown"], 2);
console.log(infoL);


// deal with senario a key is a obj
let schedule = `{
  "meetups": [
          {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
          {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
        ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
      if (key == 'date') return new Date(value);
      return value;
});

alert( schedule.meetups[1].date.getDate() ); // works!


// summary
// JSON is a data format that has its own independent standard and libraries for
// most programming languages.
// JSON supports plain objects, arrays, strings, numbers, booleans, and null.
// JavaScript provides methods JSON.stringify to serialize into JSON and
// JSON.parse to read from JSON.
// Both methods support transformer functions for smart reading/writing.
// If an object has toJSON, then it is called by JSON.stringify.



