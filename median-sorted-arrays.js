var findMedianSortedArrays = function(nums1, nums2) {
    
  if ( nums1.length > nums2.length){
      return findMedianSortedArrays(nums2, nums1);
  }
  
  let x = 0;
  let y = nums1.length;
  
  while (x <= y) {
      let pX = Math.floor((x + y)/2);
      let pY = Math.floor((nums1.length + nums2.length + 1)/2) - pX;
      
      let maxLeftX = pX === 0 ? Number.MIN_SAFE_INTEGER : nums1[pX-1];
      let maxRightX = pX === nums1.length ? Number.MAX_SAFE_INTEGER: nums1[pX];
      
      let maxLeftY = pY === 0 ? Number.MIN_SAFE_INTEGER : nums2[pY - 1];
      let maxRightY = pY === nums2.length ? Number.MAX_SAFE_INTEGER : nums2[pY];
      
      if((maxLeftX <= maxRightY) && (maxLeftY <= maxRightX)){
          if(((nums1.length + nums2.length)%2) === 0){
              return (Math.max(maxLeftX, maxLeftY) + Math.min(maxRightX, maxRightY))/2
          }
          return Math.max(maxLeftX, maxLeftY);
      } else if (maxLeftX > maxRightY){
          y -= 1;
      } else {
          x += 1
      }
  }
  
};

console.log(findMedianSortedArrays([1,3], [2]));