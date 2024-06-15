let arr = [1, 2, 3, 3, 4, 2, 2, 2]
let key = 2
let currentIdx = 0

function keyOcc(arr, key, currentIdx){
    let count = 0

    for(let i = currentIdx; i < arr.length; i++){
        if(arr[i] == key){
            count++
        }
    }

    return count
}

// console.log(keyOcc(arr, key, currentIdx));

function keyOccRecursive(arr, key, currentIdx){
    if(currentIdx > arr.length){
        return 0
    }
    let count = 0

    if(key == arr[currentIdx]){
        count++
    }

    return count + keyOccRecursive(arr, key, currentIdx + 1)

    // return (arr[currentIdx] == key ? 1 : 0) + keyOccRecursive(arr, key, currentIdx + 1)
}

console.log(keyOccRecursive(arr, key, currentIdx));