var permute = function(nums) {
  const allPerms = (nums, l, r, arr) => {
      if(l === r){
      arr.push([...nums]);
      return arr;
      }
      for(let i=l; i<r;i++){
          let t = nums[l];
          nums[l] = nums[i];
          nums[i] = t;
          arr = allPerms(nums, l+1, r, arr);
          t = nums[l];
          nums[l] = nums[i];
          nums[i] = t;
      }
      return arr;
  }
  return allPerms(nums, 0, nums.length, []);
  
};

console.log(permute([1,2,3]));