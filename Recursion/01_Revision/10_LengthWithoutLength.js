// iterative
let lengthWithoutLengthItr = (str) => {
    let i = 0
    while(str[i] !== undefined){
        i++
    }
    return i
}

console.log(lengthWithoutLengthItr('Hello there this is me!!'));

// recursive
let lengthWithoutLengthRcr = (str) => {
    if(str == '') return 0

    return 1 + lengthWithoutLengthRcr(str.slice(1))
}

console.log(lengthWithoutLengthRcr('Hello there this is me!!'));