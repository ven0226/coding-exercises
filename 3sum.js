var threeSum = function(nums) {
  const output = [];
  nums = nums.sort((a,b) => a - b);
  console.log(nums);
  for(let i = 0; i< nums.length-2 ;i++){
      if ((i > 0) && (nums[i] === nums[i-1])){
          continue;
      }
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r){
          const sum = nums[i] + nums[l] + nums[r];
          if(sum < 0){
              l += 1;
          } else if (sum > 0){
              r -= 1;
          } else {
              output.push([nums[i], nums[l], nums[r]]);
              while ((l < r) && (nums[l] === nums[l+1])){
                  l += 1;
              }
              while ((l < r) && (nums[r] === nums[r-1])){
                  r -= 1;
              }
              l += 1;
              r -= 1;
          }
      }
  }
  return output;
};

console.log(threeSum([-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]));

// [[-5,1,4],[-5,2,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-2,4],[-2,-1,3],[-2,0,2],[-2,1,1],[-1,-1,2],[-1,0,1]]