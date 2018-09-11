/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  const obj = [...s].reduce((acc, str) => {
      if(acc[str]) {
        acc[str][0] += 1;
        acc[str][1] += str;
      } else {
          acc[str] = [1, str];
      }
      return acc;
  }, {});
  const values = Object.values(obj);
  const sorted = values.sort((a,b) => b[0] - a[0]);
  const output = sorted.reduce((acc, val) => {
      return acc += val[1];
  }, '');
  return output;
};

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const len = s.length;
    const obj = {};
    for (let i = 0; i < len ; i++) {
        if(obj[s[i]]) {
            obj[s[i]][0] += 1;
            obj[s[i]][1] += s[i];
        } else {
            obj[s[i]] = [1, s[i]];
        }
    }
    const values = Object.values(obj);
    const sorted = values.sort((a,b) => b[0] - a[0]);
    const output = sorted.reduce((acc, val) => {
        return acc += val[1];
    }, '');
    return output;
};
console.log(frequencySort('tree'));