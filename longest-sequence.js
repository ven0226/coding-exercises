/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//   const mapNum = {};
//   nums.forEach(num => mapNum[num] = 1);
//   let i=0;
//   let output = 0;
//   // while(i < Object.keys(mapNum).length){
//   for (let cur of Object.values(mapNum)){
//       let local = 1;
//       // const cur = nums[i];
//       let j = cur + 1;
//       while(true){
//           if(mapNum[j]) {
//               local += 1;                
//               delete mapNum[j];
//               j += 1;
//           } else {
//               break;
//           }
//       }
//       j = cur - 1;
//       while(true){
//           if(mapNum[j]) {
//               local += 1;
//               delete mapNum[j];
//               j -= 1;
//           } else {
//               break;
//           }
//       }
//       output = local > output ? local : output;
//       i += 1;
//   }
//   return output;
// };

var longestConsecutive = function(nums) {
  const uniqueNums = new Set();
  nums.forEach(num => uniqueNums.add(num));
  let output = 0;
  nums.forEach(cur => {
      if(!uniqueNums.has(cur + 1)) {
      let j = cur - 1;
      let local = 1;
      while(uniqueNums.has(j)){
          local += 1;
          j -= 1;
      } 
      output = local > output ? local : output;
    }
  });
  return output;
}

console.log(longestConsecutive([-3,4,-3,-9,-3,-6,8,-3,0,1,5,-1,-4,0,-7,1,5]));
