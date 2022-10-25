/**
 * Given a single input string, write a function that outputs an array of strings with every possible
 * combination of letters.
 *
 * At first, don't worry about repeated (duplicate) strings.
 *
 * What time complexity is your solution?
 *
 * Extra credit: De-duplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(string) {
  len = string.length
  if(len == 0 ){
    return "This string is empty"
  }
  if (len == 1) {
    newArr.push(string)
    return newArr
  }

  let newArr = []
  for(let i = 0;i < len;i++){
    let newStr = string[i]
    for(let j = 0;i< len;j++){
      if(i!=j){
        newStr += string[j]
        if(newStr.length == len){
          newArr.push(newStr) 
        }
       
      }
    }
  }
  return newArr
}

let dana = "abcd"


console.log(allAnagrams(dana));
