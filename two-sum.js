function twoSum(nums, target) {
  const dict = new Map();
  for ( let i = 0; i < nums.length; i++) {
      let cur = target - nums[i];
      if (dict.has(cur)) {
          return [dict.get(cur), i];
      } else {
          dict.set(nums[i], i );
      }
      console.log(dict);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));