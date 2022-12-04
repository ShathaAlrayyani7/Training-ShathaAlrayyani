/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view Compose as moving RIGHT to LEFT through its arguments.
 *
 * Compose Example:
   var greet = function(name){ return 'hello ' + name;}
   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
   var welcome = compose(exclaim, greet);
   welcome('phillip'); // 'hello PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view Pipe as moving LEFT to RIGHT through its arguments.
 *
 * Pipe Example:
  var add2 = function(number){ return number + 2; }
  var multiplyBy3 = function(number){ return number * 3; }
  var addAndMultiply = pipe(add2, multiplyBy3);
  addAndMultiply(5);//should be 21
  var addAndMultiplyTwice = pipe(add2, multiplyBy3, multiplyBy3);
  addAndMultiplyTwice(5); //should be 63
 */

'use strict'
let person = 'dana'; 

let compose = (...functions) => (...args) => {
  return functions.reduceRight((prev, currFunction) => {
    console.log(currFunction(prev));
    return currFunction(prev);
  }, args);
}


let pipe = (...functions) => (...args) => {
  return functions.reduce((prev, currFunction) => {
    console.log(currFunction(prev));
    return currFunction(prev);
  }, args);
}


let greet = (name) => {
  return 'Hello '+ name
}

let exclaim = (name) =>{
  return `${name}`.toUpperCase() + '!';
}

let adding = (welcomMsg) =>{
  return welcomMsg + ' nice to meet you <3'
}

// *****************

let welcome = pipe(greet,exclaim,adding);
welcome(person);


let hello = compose(adding,exclaim,greet);
hello(person);

describe('welcome', () => {
  it('returns a string ', () => {
    expect(welcome('Dana')).toEqual('HELLO DANA! nice to meet you <3');
    expect(welcome('Shatha')).toEqual('HELLO SHATHA! nice to meet you <3');
    expect(welcome('')).toEqual('HELLO ! nice to meet you <3');
  })
})

describe('hello', () => {
  it('returns a string ', () => {
    expect(hello('Dana')).toEqual('HELLO DANA! nice to meet you <3');
    expect(hello('Shatha')).toEqual('HELLO SHATHA! nice to meet you <3');
    expect(hello('')).toEqual('HELLO ! nice to meet you <3');
  })
})
