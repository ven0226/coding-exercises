var nextGreaterElements = function (nums) {
  const output = [];
  let curIndex = 0;
  for (let num of nums) {
    let tIndex = curIndex + 1;
    let found = -1;
    if (tIndex === nums.length) {
      tIndex = 0;
    }
    while (tIndex !== curIndex) {
      if (nums[tIndex] > num) {
        found = nums[tIndex];
        break;
      }
      tIndex += 1;
      if (tIndex === nums.length) {
        tIndex = 0;
      }
    }
    output.push(found);
    curIndex += 1;
  }
  return output;
};

console.log(nextGreaterElements([5, 4, 3, 2, 1]));