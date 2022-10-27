/**
 * Write a function that takes an integer as input,
 * and returns the number of bits
 * that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010,
 * so the function should return 5 in this case
 */

const bitCounting = (num) => {
  // to turn the number into bits we use toString method
  let bites = num.toString(2)
  // to count the bites we need to loop through the string and count
  let count = 0 
  for(let i = 0;i < bites.length;i++){
    if(bites[i] == 1){
      count += 1
    }
  }

  return count
};

console.log(bitCounting(2543));
 