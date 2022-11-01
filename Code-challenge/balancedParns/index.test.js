/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *	"())"
 */
// didn't cover all the cases 
function balancedParens(input) {
  //  TO DO
  let count1 = [];
  let count2 = [];
  let openParen ="([{"
  let closeParen = ")]}"

  for (let i = 0; i < input.length; i++) {
    for(let j=0; j < openParen.length;j++){
      if(input[i] == openParen[j]){
        count1.push(input[i])
      }
    }
    for(let k = 0;k < closeParen.length;k++){
      if(input[i] == closeParen[k]){
        count2.push(input[i])
      }
    }
  }
  if (count1.length === count2.length){
    return true
  }
  else{
    return false}
}


console.log(balancedParens('([{(}()))}'));