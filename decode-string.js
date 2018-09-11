/**
 * @param {string} s
 * @return {string}
 */
let times = 0;
var decodeString = function(s) {
  const nums = [];
  const str = [];
  let curNum = 1;
  let curChar = '';
  let output = '';
  let prevNum = false;
  [...s].forEach(ch => {
    if(ch === '['){
      prevNum = false
      nums.push(curNum);
      str.push(curChar);
      curNum = 0;
      curChar = '';
    } else if (ch === ']'){
      prevNum = false;
      if(curChar){
        str.push(curChar);
      }
      let temp = str.pop();
      let n = nums.pop();
      temp = temp.repeat(n);
      temp = (str.pop() || '') + temp;
      curChar = temp;
      if(nums.length === 0){
        output += temp;
        curChar = '';
      }
    } else if(isNaN(parseInt(ch))){
      prevNum = false
      curChar += ch;
    } else {
      curNum = prevNum ? curNum * 10 + parseInt(ch) : parseInt(ch);
      prevNum = true;
    }
  });
  output += curChar;
  return output;
};

// console.log(decodeString('2[abc]3[cd]ef'));
// console.log(decodeString('3[a]2[bc]'));
// console.log(decodeString('10[leetcode]'));
// console.log(decodeString('3[a]2[b4[F]c]'));
console.log(decodeString('2[20[bc]31[xy]]xd4[rt]'));

