'use strict';

const reverseNum = (num) => {
  let output = 0;
  while (num) {
    const cur = num % 10;
    num = Math.floor(num / 10);
    output = 10 * output + cur;
  }
  return output;
}

console.log(reverseNum(1234));