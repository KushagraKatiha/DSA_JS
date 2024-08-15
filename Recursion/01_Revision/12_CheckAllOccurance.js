let arr = [1, 3, 3, 3, 2, 3, 3, 4, 3, 3]

// Iteration
let checkOccurItr = (arr, key) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            count++
        }
    }

    return count
}

console.log(checkOccurItr(arr, 3));

// Recursion
let checkOccurRcr = (arr, key, count = 0) => {
    if(arr.length == 0){
        return count
    }
    if(arr[0] == key) count++

    return checkOccurRcr(arr.slice(1), key, count)
}

console.log(checkOccurRcr(arr, 3));