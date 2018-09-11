function search(nums, start, end, k){
  if (start < end){
    let mid = Math.floor((start+end)/2);
    if(nums[mid] === k){
      return mid;
    } else if (nums[mid] > k){
      return search(nums, start, mid, k);
    } else if (nums[mid] < k){
      return search(nums, mid+1, end, k)
    }
  }
  return -1;
}

console.log(search([1,2,3,4], 0, 3, 10));