arr = [3, 4, 1, 2, 8, 1, 7]
findMe = 1; 
// currIndex = 0;
// -> output = 2
// if not found = -1 

// Iterative 

const firstOccurence = (arr, findMe) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === findMe) return i
    }
    return -1
}

console.log(firstOccurence(arr, findMe));

// Recursive

const firstOccurenceRcr = (arr, findMe, index = 0) => {

    if(arr == []) return -1
    if(arr[0] == findMe)return index
    else index+=1

    return firstOccurence(arr.splice(0, 1), findMe)
}

console.log(firstOccurenceRcr(arr, findMe));

