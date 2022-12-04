/**
 * Complete the method/function so that it removes the duplication letter
*/

/**
 * Examples
  "hello"  gets converted to "helo"
  "absadsasdasdad"  gets converted to "absd"
  "good morning"  gets converted to "god mrni"
 */

function removeDuplication(str) {
  var result = "";
    var obj = {};
    for(i=0;i<str.length;i++){
      let temp = str[i]
      if(!obj[temp]){
        obj[temp] =1
        result = result+temp;
      }
    }
    return result;
  // return to do ...

}

describe('Tests', () => {
  it('test removeDuplication', () => {
    expect(removeDuplication('hello')).toStrictEqual('helo');
    expect(removeDuplication('absadsasdasdad')).toStrictEqual('absd');
    expect(removeDuplication('good morning')).toStrictEqual('god mrni');
  });
});
