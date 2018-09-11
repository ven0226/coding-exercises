var compress = function(chars) {
  chars.push('sentinel');
  let charCount = 1;
  let i = 1;
  let j = 0;
  while(i < chars.length){
      if (chars[i-1] === chars[i]) {
          charCount += 1;
      } else {
          if(charCount > 1){
              j += 1;
              const count = `${charCount}`.split('');
              chars.splice(j,1,...count);
              console.log(j);
              j = j + count.length - 1;
              i = i + count.length - 1;
              charCount = 1;
          }
          j += 1;
          chars[j] = chars[i];
      }
      i += 1;
  }
  return j;   
};

var chars = ["a","a","a","b","b","b","b"];
const output = compress(chars)
console.log(chars.slice(0,output));