var reverseWords = function(str) {
  const splits = str.trim().split(/ +/);
  let i = 0;
  let j = splits.length - 1;
  while(i < j){
      let t = splits[i];
      splits[i] = splits[j];
      splits[j] = t;
      i += 1;
      j -= 1;
  }
  return splits.join(' ');
};

console.log(reverseWords('  b     a'));