let amount = 15
let nums = [4, 6, 10]

function minCoin(amount, nums, memo = {}){
    if(amount in memo) return memo[amount]
    if(amount === 0) return 0
    if(amount < 0) return -1

    let shortest = Infinity
    
    for(let num of nums){
        let result = minCoin(amount - num, nums, memo)
        if(result !== -1){
            shortest = Math.min(shortest, result + 1)
        }
    }

    memo[amount] = shortest === Infinity ? -1 : shortest
    return memo[amount]
}

console.log(minCoin(amount, nums));