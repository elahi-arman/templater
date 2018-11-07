# Creating Command Line Programs

This lesson is going to be kind of theory, but it's really important to understand how Javascript works and a lot of the really hard part of Javascript.
By the end though, we'll have a command line program to specify where we'll drop our templated folder structure and hopefully understand asynchronous programming and functions.

## Functions in Javascript

So we'll start by introducting two different ways to declare functions. The first is a normal function declaration like we've been using, and then we'll use the new arrow functions. There are two differences between the different syntaxes

1. Arrow functions are not hoisted. Function declarations are hoisted. So if you declare an arrow function on Line 8, it isn't valid on Line 7. Whereas a function declaration gets hoisted to the top of the scope.
2. Arrow functions automatically bind the current value of this. We'll talk about arrow functions and binding when we talk about OOP in JS.

I'll mainly use the arrow functions. 

```js
function foo(){
  console.log('foo');
}

const bar = () => console.log('bar');

function manyParams(one, two, three){};
const manyParamsArrow = (one, two, three) => {};
```

One of the coolest parts of Javascript is that functions are first class. That means functions are basically like any other variable. They can be declared anywhere, passed through to different other functions, and become the return value of functions. 

``` js
const chalk = require('chalk');
// declaring a function anywhere with arrow function
let foo = () => 'foo';

// re-declaring a function 
if (process.argv.length > 2){
  foo = () => 'foo foo';
}

// function call as a parameter
console.log(foo());

// function as a parameter
const logFoo = (chalkFn, string) => console.log(chalkFn(string));
logFoo(chalk.red, foo());

// anonymous function as a parameter (used alot with callbacks)
logFoo(chalk.red, () => 'this is anonymous');

// function as the return value of a function
const logBar = chalkFn => string => console.log(chalkFn(string));

// creating an intermediary function
const logBarRed = logBar(chalk.red)
logBarRed('bar');

// not creating an intermediary function (does the same thing as above)
logBar(chalk.red)('baz');
```

### Asynchronous Programming

JS is a weird language, but a lot of other languages have adopted it's same style. In most languages like Python or C, your program gets executed top to bottom, step after step. JS is an asynchronous programming language. So you can't really count on things getting done from top to bottom. Instead, it's event and callback (or Promise) based. JS is usually single threaded, but there are ways to make it multi threaded. Async programming makes it such that long running operations don't block 

So far, we've been using read and write sync methods from the fs module. Now, we'll look at using the asynchronous functions which won't get executed top down.

``` js
//this is example/async-read.js
const fs = require('fs');
const path = require('path');

const cb = (err, data) => {
  console.log("readdir just finished");
  if (err) {
    console.error(err);
    process.exit(1)
  }

  console.log(data);
}

// we pass in a callback function
fs.readdir('./', cb);

// we do the same call, except with an anonymous function
fs.readdir('./', (err, data) => {
  console.log("readdir 2 just finished");
  if (err) {
    console.error(err);
    process.exit(2);
  }

  console.log(data);
});

// we don't have access to the data variable out here
// after the readdir call is queued, we'll console.log
console.log("readdir hasn't finished yet");

// the program won't exit though until all callbacks have finished
```

When you make those 2 calls, you'll see that sometimes the first call ends before the second call, and sometimes the opposite happens. 

### Callback Hell

So when you have a lot of anonymous functions, you get super deeply nested calls. Callbacks are nice because they ensure an ordering to your functions, but anonymous functions aren't as nice because they'll make your code hard to maintain. Usually short functions are anonymous, but longer ones should definitely go in a named function. Here's a nice legitimate example of callback hell:

``` js
// this is example/callback-hell.js
const fs = require('fs');
const path = require('path');

const cwd = process.cwd()

// this just reads a directory one level and if there's any files, it prints out those contents
// if there are any directories, it prints the directory listing underneath
fs.readdir(cwd, (err, data) => {
  if (err){
    console.error(err)
    process.exit(1)
  }

  for (let i = 0; i < data.length; i++) {
    const filepath = path.join(cwd, data[i]);
   
    // callback 2, that gets executed in a loop
    fs.stat(filepath, (err, stats) => {
      if (err){
        console.error(err)
        process.exit(2)
      }

      if (stats.isDirectory()){

        // potential callback 3
        fs.readdir(filepath, (err, files) => {
          if (err){
            console.error(err)
            process.exit(3)
          }
          console.log(files)
        });
      } else if(stats.isFile()) {
        // other potentiatl callback 3
        fs.readFile(filepath, 'utf-8', (err, data) => {
          // notice this is the 4th time I've handled an fs error in the exacty same three lines
          // looks like Go code ;P
          if (err){
            console.error(err)
            process.exit(3)
          }

          console.log(data)
        });
      }
    });

  }
});

```

### Escape From Callback Hell

So what's creates callback hell?

1. Bad error handling, same statements repeated all over the place, cluttering up code
2. A lot of nested functions harms our readability
3. We can't reuse any blocks of code (functions) because they're all anonymous.

How do we fix callback hell? 

1. Promises with a single catch statement
2. Promises
3. Promises with named handlers

Promises are a really neat thing which  stands for a placeholder for a different value. At this point, you should go through (the nodeschool tutorial on promises)[https://github.com/stevekane/promise-it-wont-hurt]. They're one solution, but really JS doesn't have to be that bad without promises. We can also solve these problems by doing the following.

1. Create a simple error handling function which takes in an error
2. Just better styling of code
3. Don't use anonymous functions with large blocks of code

### Task

So today, we'll do two things.

1. Install the yargs package to create a nice command line program. (This is in main.js)
2. Convert our writing out of CSV and JSOn files to Asynchronous methods. (This is in generate-files.js)

### Extra Stuff

1. Convert all calls to asynchronous
2. Use promises and the promisify function from the utils package in the Node standard library to make promise functions out of all the callback bacsed functions..
