var sortColors = function (nums) {
    let i = 0;
    let j = 0;
    let n = nums.length - 1;
    mid = 1;
    while (j <= n){
        if(nums[j] < mid){
            let t = nums[j];
            nums[j] = nums[i];
            nums[i] = t;
            i += 1;
            j += 1;
        }
        else if (nums[j] > mid){
            let t = nums[j];
            nums[j] = nums[n];
            nums[n] = t;
            n -= 1;
        }
        else{
            j += 1;
        }
    }
    return nums;
};

// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// console.log(sortColors([1, 0, 2, 0, 2, 1]));
// console.log(sortColors([1, 0, 2]));
// console.log(sortColors([1, 2, 0]));
// console.log(sortColors([2, 1, 2]));
// console.log(sortColors([0,1,0]));
// console.log(sortColors([0,2,2,2,0,2,1,1]));
// console.log(sortColors([2,2,2,1,0,1,1,1,1]));
// console.log(sortColors([0,1,2,0,1,2]));
// console.log(sortColors([0,2,1]));
// console.log(sortColors([2,2,1,2,1,1,1,0,0,2,1,0,2,1,2,2,1,1,1,1,1,0,2,0,2,0,2,2,1,0,2,1,0,2,1,2,0,0,0,0,2,1,1,2,0,1,2,2,0,0,2,2,0,1,0,1,0,0,1,1,1,0,0,2,2,2,1,0,0,2,1,0,1,0,2,2,1,2,1,1,2,1,1,0,0,2,1,0,0])); 
console.log(sortColors([1,0,1,2,2,0,0,0,2,0,1,0,0,1,0,2,0,0,0,1,1,0,2,1,1,2,1,0,1,2,2,2,0,0,2,0,1,0,1,1,0,0,1,2,1,2,2,2,0,0,0,2,0,1,1,2,1,2,0,2,2,2,2,0,0,1,1,1,2,2,2,0,0,1,2,0,1,2,2,2,0,1,2,1,0,1,1,1,1,1,0,1,1,0,2,2,2,1,1,1,1,0,1,2,2,2,0])); 