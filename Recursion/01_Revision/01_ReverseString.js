// Iterative
// Hello => olleH

const reverseItr = (str) => {
    let reversed = ''

    for(let i = str.length-1; i >= 0; i--){
        reversed += str[i]
    }

    return reversed
}

console.log(reverseItr('Hello'));

// Recursive
// Hello => olleH

const reverseRcr = (str) => {
    if(str == '') return str
    return str[str.length - 1] += reverseRcr(str.substring(0, str.length-1))
}

console.log(reverseRcr('Hello'));