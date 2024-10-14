function sumOfNRcr(n){
    if(n == 1) return 1
    else return n + sumOfNRcr(n-1)
}

console.log(sumOfNRcr(6));
