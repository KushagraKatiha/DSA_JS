// Iterative

function removeTAS(str){
    let removed = ''

    for(let i = 0; i < str.length; i++){
        if(str[i] == ' ' || str[i] == '\t'){
            continue
        }else{
            removed += str[i]
        }
    }

    return removed
}

// console.log(removeTAS('Hello This is            Pro Coder !')); // HelloThisisProCoder!

// Recursive

function removeTASRecursive(str){
    if(str.length == 0) return ''

    let firstChar = str[0]
    let restStr = str.substring(1)

    if(firstChar == ' ' || firstChar == '\t') return removeTASRecursive(restStr)

    return firstChar + removeTASRecursive(restStr)
}

console.log(removeTASRecursive('Hello This is           Pro Coder !'));   