'use strict';

const isPallindrome = (str) => {
  let last = str.length;
  for (let i=0; i < Math.floor(last/2); i++) {
    if (str[i] !== str[last -1]){
      return false;
    }
    last -= 1;
  }
  return true;
};

console.log(isPallindrome('baabc'));