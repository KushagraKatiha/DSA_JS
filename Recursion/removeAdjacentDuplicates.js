// str = 'aabcc'
// remove duplicates

function removeDuplicates(str){
    let removed = ''

    for(let i = 0; i < str.length; i++){
        if(i >= str.length || str[i] == str[i+1]){
            removed += ''
        }else{
            removed += str[i]
        }
    }

    return removed
}

// console.log(removeDuplicates('aabcc'));

function removeDuplicatesRecursive(str){

    if(str.length == 1) return str[0]

    let firstChar = str[0]
    let restStr = str.substring(1)

    if(firstChar == restStr[0]){
        return removeDuplicatesRecursive(restStr)
    }else{
        return firstChar + removeDuplicatesRecursive(restStr)
    }
}

console.log(removeDuplicates('rrad'));
