let arr = ['(', ')', '(', ')', '(', ')', '(', ')', '(']

// Iterative
function isBalance(arr){

    let count = 0

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == '('){
            count++
        }else if(arr[i] == ')'){
            count--
        }
    }

    if(count == 0){
        return true
    }else{
        return false
    }
}

// console.log(isBalance(arr));

function isBalanceRecursive(arr, startIdx = 0, count = 0){
    if(startIdx >= arr.length){
        return ((count == 0) ? true : false)
    }

    if(count < 0){
        return false
    }

    if(arr[startIdx] == '('){
        return isBalanceRecursive(arr, startIdx + 1, count + 1)
    }else if(arr[startIdx] == ')'){
        return isBalanceRecursive(arr, startIdx + 1, count - 1)
    }else{
        return false
    }

}

console.log(isBalanceRecursive(arr));