/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

const commonCharacters = (str1, str2) => {
  // TODO
  let temp = [];
  
  if(str1.length == 0 || str2.length == 0){
    return "There is no common characters found!"
  }
  else if (str1 == str2) {

    return 'Perfect Twins : ' + str1

  }

  for(let i = 0; i < str1.length; i++){
    for(let j=0 ; j< str2.length; j++){

      if (str1[i] == str2[j] && !temp.includes(str1[i])) {
        temp.push(str1[j]);
      }
    }
  }

  return temp.join("");

  }

  describe('commonCharacters', () => {
    it('returns a string containing the characters found in both strings (without duplication)', () => {
      expect(commonCharacters('dana','dad')).toEqual('da');
      expect(commonCharacters('great','green')).toEqual('gre');
      expect(commonCharacters('','Hello')).toEqual('There is no common characters found!');
      expect(commonCharacters('','')).toEqual('There is no common characters found!');
      expect(commonCharacters('disinterested','disinterested')).toEqual('Perfect Twins : disinterested');
    })
  })
