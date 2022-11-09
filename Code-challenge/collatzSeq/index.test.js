/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million.
*/

/**
 * Wiki link
 * https://en.wikipedia.org/wiki/Collatz_conjecture
 */

/**
 * What is the time complexity for your solution ?
 */

/**
 * Write the unit tests that cover your solution
 */

function collatzSeq(number) {
    let num = []
    if(number <= 0){
        return 'This number is not valid'
    }
    function rec(number) {
        if(number == 1){
            num.push(number)
            return num
        }

        if(number % 2 == 0){
            num.push(number);
            return rec(number/2)
        }
        else{
            num.push(number);
            return rec((3 * number) + 1)
        }
        
    }
    rec(number);
    return num
}

describe('collatzSeq', () => {
    it('Collatz conjecture function returns an array of numbers', () => {
        expect(collatzSeq(10)).toEqual([10,5,16,8,4,2,1]);
        expect(collatzSeq(1)).toEqual([1]);
        expect(collatzSeq(25)).toEqual([25, 76, 38, 19, 58, 29, 88, 44, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]);
    })
    it('should return a string', () => {
        expect(collatzSeq(-5)).toEqual('This number is not valid');
        expect(collatzSeq(0)).toEqual('This number is not valid');
    })
  })


