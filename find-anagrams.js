/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    
  const pMap = [...p].reduce((acc, str) => {
      if(acc[str]){
          acc[str] += 1;
      } else {
          acc[str] = 1;
      }
      return acc;
  }, {});
  
  let end = 0;
  let begin = 0;
  let counter = Object.keys(pMap).length;;
  const output = [];
  
  while(end < s.length){
      const c = s.charAt(end);
      if(pMap.hasOwnProperty(c)){
          pMap[c] -= 1;
          if(pMap[c] === 0){
              counter -= 1;   
          }
      }
      end += 1;
      
      while(counter === 0){
          const b = s.charAt(begin);
          if(pMap.hasOwnProperty(b)){
              pMap[b] += 1;
              if(pMap[b] > 0){
                counter += 1;
              }
          }
          if(end-begin === p.length){
              output.push(begin);
          }
          begin += 1;
      }
  }
  return output;
};

console.log(findAnagrams('cbaebabacd', 'abc'));