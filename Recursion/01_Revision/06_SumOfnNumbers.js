// iteration

let sumOfNItr = (n) => {
    let sum = 0
    for(let i = 0; i <= n; i++){
        sum+=i
    }

    return sum
}

console.log(sumOfNItr(5));

// recursion

let sumOfNRcr = (n) => {
    if (n == 1) return 1
    
    return n + sumOfNRcr(n-1)
}

console.log(sumOfNRcr(4));