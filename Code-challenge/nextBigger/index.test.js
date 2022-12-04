/*
You have to create a function
that takes a positive integer number and returns the
next bigger number formed by the same digits:

Exanmples:
nextBigger(12)==21
nextBigger(513)==531
nextBigger(2017)==2071
If no bigger number can be composed using those digits, return -1:
nextBigger(9)==-1
nextBigger(111)==-1
nextBigger(531)==-1
*/

function sortedDigits(n){
    let arr = ('' + n).split('')
    return arr.sort((a, b) => b - a)   
}

const nextBigger = function(num) {
    const max = sortedDigits(num).join('');

    for (let i = num + 1; i <= max; i++) {
        if (max === sortedDigits(i).join('')) return i
    }
    return -1

};

console.log(nextBigger(531));
