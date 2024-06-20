function tribMemo(n, memo = {}){
    if(n in memo) return memo[n]
    if(n === 0) return 0
    if(n === 1 || n === 2) return 1

    memo[n] = tribMemo(n-3) + tribMemo(n-2) + tribMemo(n-1)

    return memo[n]
}

console.log(tribMemo(5));