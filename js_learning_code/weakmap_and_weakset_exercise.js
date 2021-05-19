'use strict';

// WeakMap and WeakSet exercise

// Store "unread" flags
/*
There’s an array of messages:

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
Your code can access it, but the messages are managed by someone else’s code. 
New messages are added, old ones are removed regularly by that code, 
and you don’t know the exact moments when it happens.
Now, which data structure could you use to store information about 
whether the message “has been read”? The structure must be well-suited to 
give the answer “was it read?” for the given message object.
P.S. When a message is removed from messages, it should disappear from your structure as well.
P.P.S. We shouldn’t modify message objects, add our properties to them. 
As they are managed by someone else’s code, that may lead to bad consequences.
*/
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let ReadMsg = new WeakSet();

function Read(messages) {
    for (let i =0; i < 2; i++) {
        ReadMsg.add(messages[i]);
    }
    return ReadMsg
}

ReadMsg =  Read(messages);
console.log(ReadMsg);
alert("Read message 0: " + ReadMsg.has(messages[0]))

messages = [
  {text: "Hi", from: "xiao.liu"},
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
];

console.log(Read(messages));
alert("Read message 2: " + ReadMsg.has(messages[2]))


/*
Store read dates
importance: 5
There’s an array of messages as in the previous task. The situation is similar.

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
The question now is: which data structure you’d suggest to store the information: “when the message was read?”.
In the previous task we only needed to store the “yes/no” fact. Now we need to store the date, and it should only remain in memory until the message is garbage collected.
P.S. Dates can be stored as objects of built-in Date class, that we’ll cover later.
*/

let whenRead = new WeakMap();

whenRead.set(messages[0], new Date());
console.log(whenRead);
