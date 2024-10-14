function removeAdjacentItr(string){

    let newStr = ''

    for(let i = 0; i < string.length; i++){
        if(i === string.length-1 || string[i] !== string[i+1]){
            newStr += string[i]
        }
    }

    return newStr
}

// console.log(removeAdjacentItr('Hello'));


function removeAdjacentRcr(string){
    if(string.length <= 1) return string

    if(string[0] == string[1]){
        return removeAdjacentRcr(string.substring(1))
    }

    return removeAdjacentRcr(string[0]) + removeAdjacentRcr(string.substring(1))
}

console.log(removeAdjacentRcr("Hello"));
