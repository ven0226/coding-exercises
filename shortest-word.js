/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function(licensePlate, words) {
  let s = licensePlate.replace(/ +/g, '').replace(/[0-9]/g, '').toLowerCase();
  s = [...s];
  let output = '';
  words.forEach((word) => {
      let i = 0;
      let temp = word;
      console.log(word);
      for(let char of s){
          i = temp.indexOf(char);
          if(i === -1){
              break;
          }
          temp = `${temp.substring(0,i)}${temp.substring(i+1,temp.length)}`;
      };
      output = (i >= 0) && (word.length < output.length || output === '') ? word : output;
  });
  return output;
};

console.log(shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]));
// console.log(shortestCompletingWord("1s3 PSt", ["step"]));