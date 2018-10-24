# Javascript Basics

## Variable Declarations

Open up the REPL (type ```node``` in your terminal) and then start typing the following blocks. Each sample builds upon the next.

``` js
// don't use var, it's function scoped and confusing
var number = 0;

// use let and const for block scoping (what you normally think of for scope)
let array = [];                       // let means you can reassign this variable
const string = "can't reassign";      // const means you cannot reassign this variable

let boolean = true;

// be careful because const can't be reassigned, but it's properties can change
const user = {
  firstName: 'arman',
  lastName: 'Elahi'
}

user.firstName = 'Arman'

// to print the value of anything, just type the variable name in the REPL
// > number
// 0 
```

## Useful things with Strings

There's tons of [useful string functions](https://devdocs.io/javascript-string/), here's a sampling of them
``` js

// use double or single quotes for string literals (constants)
let string = "Arman is the best";

// use backticks to start string templates with variables in them
// be careful, the templates will always be invoked with current vars in scope
let templateString = `${user.firstName} is the best`;
templateString.charAt(0)                // "A" 
templateString.concat('at everything')  // returns new string, doesn't change original
templateString.endsWith('best')         // true
templateString.includes('is the')       // true
templateString.indexOf('r')             // 1
templateString.lastIndexOf('t')         // 16
templateString.length                   // 16
templateString.padEnd(40, ' ')          // returns new string with length 40
templateString.replace(/is/i, 'was')    // returns new string Arman was the best
templateString.split(' ')               // returns array ['Arman', 'is', 'the', 'best']
templateString.slice(-4)                // "best"
templateString.startsWith('Arman')      // true
templateString.substring(6)             // "is the best"
templateString.toLowerCase()            // "arman is the best"
```

## Useful things with Arrays

There's tons of [array functions](https://devdocs.io/javascript-array/). We'll use most of them at one point in this series, but here's a couple of Data Structure Implementations.

Whenever we encounter an array function, I'll give a brief description plus the devdocs link.

### Stack as Array

A list with Last In, First Out (LIFO) access semantics.

``` js
const stack = [];
stack.push(2);              // stack is now [2]
stack.push(5);              // stack is now [2, 5]
const i = stack.pop();      // stack is now [2]
console.log(i);             // displays 5
```

### Queue as Array

A list with First In, First Out (FIFO) access semantics.

``` js
const queue = [];
queue.push(2);              // queue is now [2]
queue.push(5);              // queue is now [2, 5]
const i = queue.shift();    // queue is now [5]
console.log(i);             // displays 2
```

### Binary Tree as Array

A hierarchical structure where each node can have up to 2 children

``` js
const btree = [];
leftChild = btree => index => 2i + 1;
rightChild = btree => index => 2i + 2;
```

## Useful things with Objects

Javascript's main type is an Object. It's a data type that holds string keys that can map to any sort of value. 

``` js
const firstNameField = "firstName"
const fullName = 'Arman Elahi'

const user = {
  fullName,                   // JS will automatically create a property called fullName with the value of the corresponding variable
  // looks complex, but uses the value of the variable firstNameField for the object property name
  [firstNameField]: 'Arman', // important syntax, use a ","
  lastName:  'Elahi',        // we can also use static field names note trailing commas are okay
}

// adding a new property
user.title = 'Master of Awesome'
// deleting a property
delete user.fullName

// assigning a property with dynamic name
const timestamp = new Date().getTime()
user[timestamp] = 'created'   // yes it's a stupid way to do a timestamp
```

## Other Useful Types (ES6)

Javascript is an implementation of the ECMAScript spec. The current iteration is ES6 and it's super exciting because it brings about a lot of really cool features. [This book](http://exploringjs.com/es6.html) highlights them. We'll just use most of the features. 

- Symbols - for defining constants
- Maps - Like an object except the key can be any value (even symbols or functions)
- Sets - List with no duplicates
