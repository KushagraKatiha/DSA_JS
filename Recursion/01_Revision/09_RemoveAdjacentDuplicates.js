// Iterative
let removeAdjacentDuplicatesItr = (str) => {
    if(str.length == 0) return ''

    let stack = []

    for(let i = 0; i < str.length; i++){
        if(stack.length > 0){
            if(str[i] === stack[stack.length-1]){
                stack.pop()
                stack.push(str[i])
            }else{
                stack.push(str[i])
            }
        }else{
            stack.push(str[i])
        }
    }

    return stack.join('')
}

console.log(removeAdjacentDuplicatesItr('aabcc'));

// Recursive
let removeAdjacentDuplicatesRcr = (str) => {
    if(str.length == 0) return ''
    if(str.length == 1) return str

    if(str[0] === str[1]){
        return removeAdjacentDuplicatesRcr(str.slice(1))
    }

    return removeAdjacentDuplicatesRcr(str[0]) + removeAdjacentDuplicatesRcr(str.slice(1))
}

console.log(removeAdjacentDuplicatesRcr('Hello')); 