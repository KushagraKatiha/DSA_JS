/*
coin change problem, where you need to determine if it's possible to form a specific amount using any combination of elements from a given set, which can be used an unlimited number of times.

sumPossible(8, [5, 12, 4]) -> true
sumPossible(103, [6, 20, 1]) -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false

*/


let amount = 15
let nums = [4, 6, 10]

function sumPossible(amount, nums, memo = {}){
    if(amount in memo) return memo[amount]
    if(amount < 0) return false
    if(amount === 0) return true

    for(let num of nums){
        if(sumPossible(amount-num, nums, memo)){
            memo[amount] = true
            return true
        }
    }

    memo[amount] = false
    return false
}

console.log(sumPossible(amount, nums));

