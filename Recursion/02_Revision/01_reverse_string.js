// Reverse a string

// Hello => olleH

function reverseStrItr(string){
    let reverse = ""
    let length = string.length

    for(let i = length-1; i >= 0; i--){
        reverse+=string[i]
    }

    return reverse
}
// console.log(reverseStrItr('Hello'));

function reverseStrRcr(string){
    if (string == '') return ''

    return string[string.length-1] + reverseStrRcr(string.slice(0, string.length-1))
}

console.log(reverseStrRcr('This'));

