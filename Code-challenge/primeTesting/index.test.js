/**
 * A prime number is an integer number that cannot be divided by any number
 * except itself and 1.
 * Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

const primeTester = function(n) {
  if(n==1 || n==0){
    return false
  }
  if(n==2){
    return true
  }
  else{
    for(let i = 2; i < n ;i++){
      if(n%i==0){
        return false
      }
    }
    return true
  }
};

/* Extra credit: Write a function that generates a list of all prime numbers
  * in a user-specified range (inclusive).
 If you're not quite sure where to start,
  * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
  * saucy, check out the Sieve of Atkin.)
*/

const primeArray = function(n) {
  let primeArr = [];
  if(n<2){
    return `There is no Prime Numbers in range of ${n}`
  }
  if(n==2){
    primeArr.push(n)
    return primeArr
  }
  for(let i = 2 ; i <= n ; i++){
    if(n==2){
      primeArr.push(i)
    }
    if(n>2 || i==n){
      for(let j = 2; j < i ;j++){
        if(i%j==0 && i < n){
          i++
        }
        if(i%j==0 && i == n){
          return primeArr
        }
      }
      primeArr.push(i)
    }
  }
  return primeArr
};


describe('primeTester', () => {
  it('returns boolian ', () => {
    expect(primeTester(9)).toEqual(false);
    expect(primeTester(19)).toEqual(true);
    expect(primeTester(27)).toEqual(false);
    expect(primeTester(59)).toEqual(true);
    expect(primeTester(0)).toEqual(false);
    expect(primeTester(1)).toEqual(false);
  })
})

describe('primeArray', () => {
  it('returns an array of prime numbers in of range(n)', () => {
    expect(primeArray(9)).toEqual([2, 3, 5, 7]);
    expect(primeArray(13)).toEqual([2, 3, 5, 7, 11, 13]);
    expect(primeArray(19)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    expect(primeArray(2)).toEqual([2]);
    expect(primeArray(0)).toEqual("There is no Prime Numbers in range of 0");
  })
})
