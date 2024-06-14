// arr = [3, 4, 2, 8, 1, 7]
// findMe = 1; 
// currIndex = 0;
// -> output = 2
// if not found = -1 

// Iterative

// function firstOcc(arr, findMe, currIndex){
//     while(currIndex < arr.length){
//         if(arr[currIndex] == findMe){
//             return currIndex
//         }else{
//             currIndex += 1
//         }
//     }

//     return -1
// }

// // Recursive

// function recursiveFirstOcc(arr, find, currIndex){
//     if(arr.length == currIndex){
//         return -1
//     }
//     if(arr[currIndex] == find){
//         return currIndex
//     }

//     return recursiveFirstOcc(arr, find, currIndex + 1)
// }

// console.log(recursiveFirstOcc(arr, findMe, currIndex));

// ##################################### REVISION-1 ########################################################

arr = [3, 4, 2, 8, 1, 7]
findMe = 0; 
currIndex = 2;
// -> output = 2
// if not found = -1 

function findFirstOcc(arr, findMe, currIndex){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == findMe){
            currIndex = i 
            return currIndex
        }
    }
    return `Item not found !`
}

// console.log(findFirstOcc(arr, findMe, currIndex));

function findFirstOccRecursive(arr, findMe, currIndex){
    if(arr[currIndex] == findMe) return currIndex

    if(currIndex > arr.length - 1) return `Item not found !`
    
    return findFirstOccRecursive(arr, findMe, currIndex + 1)
}

console.log(findFirstOccRecursive(arr, findMe, currIndex));
