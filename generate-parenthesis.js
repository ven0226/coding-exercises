
// var generateParenthesis = function(n) {
//   const permute = (val, l, r, perms) => {
//     if (l === r){
//       perms.add(val.join(''));
//       return perms;
//     }
//     for (let i=l; i< r; i++){
//       let t = val[i];
//       val[i] = val[l];
//       val[l] = t;
//       perms = permute(val, l+1, r, perms);
//       let t1 = val[i];
//       val[i] = val[l];
//       val[l] = t1;
//     }
//     return perms;
//   };

//   const ones = '('.repeat(n);
//   const zeros = ')'.repeat(n);
//   const str = ones+zeros;
//   const perms = new Set();
//   const allPerms = Array.from(permute([...str], 0, str.length, perms));
//   const output = [];
//   for (let i = 0; i < allPerms.length; i++){
//     const curStr = [...allPerms[i]];
//     if (curStr[0] === ')'){
//       continue;
//     }
//     let open = 0;
//     let close = 0;
    
//     for (let j = 0; j< curStr.length; j++){
//       if (curStr[j] === '('){
//         open += 1;
//       } else {
//         close += 1;
//       }
//       if (close > open){
//         break;
//       };
//     }
//     if (open && open === close){
//       output.push(curStr.join(''));
//     }
//   }
//   return output;
// };


var generateParenthesis = function(n) {
  const permute = (arr, str, open, close, max) => {
    if(str.length === max*2){
      arr.push(str);
      return arr;
    }
    if(open<max){
      arr = permute(arr, str + '(', open+1, close, max);
    }
    if(close<open){
      arr = permute(arr, str+ ')', open, close+1, max);
    }
    return arr;
  }
  return permute([], '', 0, 0, n);
};
console.log(generateParenthesis(2))