arr = [3, 4, 2, 8, 1, 7]
findMe = 1; 
currIndex = 0;
// -> output = 2
// if not found = -1 

// Iterative

function firstOcc(arr, findMe, currIndex){
    while(currIndex < arr.length){
        if(arr[currIndex] == findMe){
            return currIndex
        }else{
            currIndex += 1
        }
    }

    return -1
}

// Recursive

function recursiveFirstOcc(arr, find, currIndex){
    if(arr.length == currIndex){
        return -1
    }
    if(arr[currIndex] == find){
        return currIndex
    }

    return recursiveFirstOcc(arr, find, currIndex + 1)
}

console.log(recursiveFirstOcc(arr, findMe, currIndex));
