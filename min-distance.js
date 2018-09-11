var minDistance = function(word1, word2) {
  const lcs = [];
  for (let i = 0; i <= word1.length; i++){
    lcs.push([]);
    for(let j = 0; j <= word2.length; j++){
      if(i=== 0 || j === 0){
        lcs[i][j] = 0;
        continue;
      }
      if(word1.charAt(i-1) === word2.charAt(j-1)){
        lcs[i][j] = lcs[i-1][j-1] + 1;
      } else {
        lcs[i][j] = Math.max(lcs[i-1][j], lcs[i][j-1]);
      }
    }
  }
  return word1.length - lcs[word1.length][word2.length] + word2.length - lcs[word1.length][word2.length];
};

console.log(minDistance("sea", "ate"));