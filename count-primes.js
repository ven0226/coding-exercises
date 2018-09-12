const countPrimes = function(n) {
    
    const arr = new Array(n).fill(false);
    let count = 0;
    for (let i = 2; i < n ; i++){
        if(!arr[i]){
            count += 1
            let j = 2;
            while(i*j <= n){
                arr[i*j] = true;
                j += 1;
            }
        }
    }
    return count;
    
};

console.log(countPrimes(10))
