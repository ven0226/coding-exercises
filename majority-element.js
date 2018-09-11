/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

  let n1 = nums[0];
  let n2 = nums[1];
  let c1 = c2 = 0;

  nums.forEach((num) => {
    if (n1 === num){
      c1 += 1;
    } else if (n2 === num){
      c2 += 1;
    } else if (c2 === 0){
      n2 = num;
      c2 += 1;
    } else if (c1 === 0){
      n1 = num;
      c1 += 1;
    } else {
      c1 -= 1;
      c2 -= 1;
    }
  });
  const output = new Set();
  if(nums.filter(num => num === n1).length > nums.length/3){
    output.add(n1);
  }
  if(nums.filter(num => num === n2).length > nums.length/3){
    n1 !== n2
    output.add(n2);
  }
  return [...output];
};

console.log(majorityElement([2,2,9,3,9,3,9,3,9,3,9,3,9,3,9,3,9]));