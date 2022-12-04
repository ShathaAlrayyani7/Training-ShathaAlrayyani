/*
Problem 1:
Replace the native Array map function with your own.
It should work exactly the same way as Javascript built-in map function.
The map function works on the array and returns back a new array
where each element has been modified according to the results
of calling the callback function.
See example usage to understand what arguments are passed to the callback.
*/
// map takes an array and function as argumentfunction map(arr, mapFunc) 
//{    const mapArr = []; // empty array        
// loop though array    for(let i=0;i<arr.length;i++) 
//{        const result = mapFunc(arr[i], i, arr);        
//mapArr.push(result);    }    return mapArr;}

Array.prototype.myMap = function(callback) {
  let newArray = [];
  for(let i = 0 ; i < this.length;i++){
    let result = callback(this[i],i,this);
    newArray.push(result)
  }
  return newArray
};

var transform = function(element,index,array){
  return array[index] + index + element;
};

let arr = [1,2,7,'a','b','c']
let arr2 = ["a","b","c"]

let newFun = (element,index,array) =>{
  let result = element+1+array[index]
  return result
}



/*
Example usage:
["a","b","c"].map(transform); //should return ['a0a','b1b','c2c'];
*/


/*
Problem 2:
Write an asynchronous sum function that accepts two numbers and a callback.
The function should wait 1 second, then calculate the sum of two numbers
and pass the result to the callback.
If 1st or 2nd argument is not a number, the function should call the callback
with the error message - a simple string that says "Incorrect argument(s)".
Please see example usage to understand what should be passed to the callback.
*/

const asyncSum = async function(a, b, callback) {
  let num = a+b
  setTimeout(() => {
    if(typeof(num)!='number'){
      let err = `Incorrect argument(s)`
      callback(err)
    }
    else{
      callback('',num)
    }
  }, 1000)
};

/*
Example use:
*/

const logNumber = async function(error, number) {
  if (await error) {
    console.log('Error:', error);
  } else {
    console.log('The total is: ', number);
  }
  
};

let x = asyncSum(4,7,logNumber);//should print "The total is: 17" after 1 second



describe('arr.myMap', () => {
  it('returns an array ', () => {
    expect(arr.myMap(newFun)).toEqual([3, 5, 15, 'a1a', 'b1b', 'c1c']);
    expect(arr.myMap(transform)).toEqual([2, 5, 16, 'a3a', 'b4b', 'c5c']);

  })
})

describe('arr2.myMap', () => {
  it('returns an array ', () => {
    expect(arr2.myMap(transform)).toEqual(['a0a', 'b1b', 'c2c']);
    expect(arr2.myMap(newFun)).toEqual(['a1a', 'b1b', 'c1c']);

  })
})

/*
asyncSum(10,"B",logNumber);
//should print "Error: Incorrect argument(s)" after 1 second
*/


/*
Problem 3 (ADVANCED):
What kind of candy do you like?
Your answer: 
*/
