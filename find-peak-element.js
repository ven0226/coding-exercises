var findPeakElement = function(nums) {
  function search(nums, start, end){
      if(start === end){
        return start;
      }
      let mid = Math.floor((start+end)/2);
      if(nums[mid] > nums[mid+1]){
        return search(nums, start, mid);
      } else{
        return search(nums, mid+1, end);
      }
  }
    return search(nums, 0, nums.length-1);
};

console.log(findPeakElement([1,2,3,4]));