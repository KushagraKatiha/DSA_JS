// Reverse a string

// iterative 
// Hello

function reverseString(str){
    let reverse = ""
    let length = str.length - 1

    while(length >= 0){
        reverse += str[length]
        length -= 1
    }

    return reverse
}

// console.log(reverseString('Hello'));

// Recursion

function recursiveReverseString(str){

    console.log(`Current String: ${str}`);

    if(str.length === 0){
        return str
    }

    
    let reversedPart = recursiveReverseString(str.substring(0, str.length - 1))
    let result = str[str.length-1] + reversedPart

    console.log(`Reversing: Last Char: ${str[str.length-1]} added in front of ${reversedPart} to form a result: ${result}`);

    return result

}

console.log(recursiveReverseString('Hello'));