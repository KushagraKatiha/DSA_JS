// arr = [3, 4, 1, 8, 1, 7]
// findMe = 1;
// currIndex = 0;
// -> output == 2
// if not found = -1

function firstOccurItr(num, arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == num) return i
    }
}

// console.log(firstOccurItr(1, [3, 4, 1, 8, 1, 7]));

function firstOccurRcr(num, arr, index = 0){
    if(arr.length == 0) return -1
    if(arr[0] == num) return index
    else index++

    return firstOccurRcr(num, arr.splice(1, arr.length), index)
}

console.log(firstOccurRcr(1, [3, 4, 1, 8, 1, 7]));


