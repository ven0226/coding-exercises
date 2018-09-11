var findKthLargest = function(nums, k) {
  const minHeap = [];
  nums.forEach((element) => {
    if(minHeap.length === k) {
      if(minHeap[0] > element){
        return;
      } else {
        if (minHeap.length === 1) {
          minHeap[0] = element;
          return;
        }
        const last = minHeap.pop();
        minHeap[0] = last;
        let rootIndex = 0;
        let left = (2 * rootIndex) + 1;
        let right = (2 * rootIndex) + 2;
        while((minHeap[rootIndex] > minHeap[left]) || (minHeap[rootIndex] > minHeap[right])){
          if(minHeap[left] < minHeap[right]){
            [minHeap[left], minHeap[rootIndex]] = [minHeap[rootIndex], minHeap[left]];
            rootIndex = left;
          } else {
            [minHeap[right], minHeap[rootIndex]] = [minHeap[rootIndex], minHeap[right]];
            rootIndex = right;
          }
          left = (2 * rootIndex) + 1;
          right = (2 * rootIndex) + 2;
          if(minHeap[2 * rootIndex + 1] === undefined || minHeap[2 * rootIndex + 2] === undefined){
            break;
          } 
        }
      }
    }
    minHeap.push(element);
    let curIndex = minHeap.length-1;
    if(minHeap.length >= 2){
      while(Math.floor((curIndex-1)/2) >= 0 && minHeap[Math.floor((curIndex-1)/2)] > minHeap[curIndex]){
        const temp = minHeap[curIndex];
        minHeap[curIndex] = minHeap[Math.floor((curIndex-1)/2)];
        minHeap[Math.floor((curIndex-1)/2)] = temp;
        curIndex = Math.floor((curIndex-1)/2);
      }
    }
  });

  return minHeap[0];
};


// console.log(findKthLargest([3,2,1,5,6,4], 2));
// console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([-1, 2, 0], 1));