function fibMemo(n, memo = {}){
    if(n in memo) return memo[n]
    if(n <= 1) return n

    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo)
    console.log(memo);
    return memo[n]
}

console.log(fibMemo(6));