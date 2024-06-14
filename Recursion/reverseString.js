// Reverse a string

// iterative 
// Hello

// function reverseString(str){
//     let reverse = ""
//     let length = str.length - 1

//     while(length >= 0){
//         reverse += str[length]
//         length -= 1
//     }

//     return reverse
// }

// console.log(reverseString('Hello'));

// Recursion

// function recursiveReverseString(str){

//     console.log(`Current String: ${str}`);

//     if(str.length === 0){
//         return str
//     }

    
//     let reversedPart = recursiveReverseString(str.substring(0, str.length - 1))
//     let result = str[str.length-1] + reversedPart

//     console.log(`Reversing: Last Char: ${str[str.length-1]} added in front of ${reversedPart} to form a result: ${result}`);

//     return result

// }

// console.log(recursiveReverseString('Hello'));


// ##################################### REVISION-1 ########################################################

// Iterative
// Hello

function reverseStr(str){
    let reversedStr = ''
    let i = str.length - 1
    while(i > -1){
        reversedStr += str[i]
        i--
    }
    return reversedStr
}

console.log(reverseStr('Hello'));

// Recursive 

function reverseStrRecursive(str){
    if(str.length == 1) return str[0]
    
    return str[str.length-1] + reverseStrRecursive(str.substring(0, str.length-1))
}

console.log(reverseStrRecursive('Hello'));