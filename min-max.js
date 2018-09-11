function miniMaxSum(arr) {
  let min;
  let max;
  for ( let i = 0; i< arr.length; i++){
      let j = 0;
      let sum = 0;
      for(let j =0; j < arr.length; j++){
         if (i === j) {
             continue;
         }
          sum += arr[j];
      }
      if(min === undefined && max === undefined){
          min = max = sum;
      } else if (sum < min){
          min = sum;
      } else if (sum > max){
          max = sum;
      }
      
  }
  
  console.log(`${min}  ${max}`);

}

miniMaxSum([1,2,3,4,5]);