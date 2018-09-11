'use strict';

const merge = (a,b) => {
  let output = [];
  let i=0, j = 0;
  while (true) {
    if(a[i] < b[j]) {
      output.push(a[i]);
      i += 1;
    } else if (a[i] > b[j]) {
      ouput.push(b[j]);
      j += 1;
    } else {
      output.push(a[i]);
      output.push(b[j]);
      i += 1;
      j += 1;
    }
    if ( i === a.length || j === b.length) {
      break;
    }
  }
  if ( i < a.length) {
    for (let k = i; k < a.length ; k += 1) {
      output.push(a[k]);
    }
  }
  if ( j < b.length) {
    for (let k = j; k < b.length ; k += 1) {
      output.push(b[k]);
    }
  }

  return output;
}

console.log(merge([1,2,3], [4,5,6]));