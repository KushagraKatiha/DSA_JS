// count vowels in a string 

// Iterative

// function isVowel(character){
//     let lowerChar = character.toLowerCase()
//     let vowels = 'aeiou'

//     if(vowels.indexOf(lowerChar) != -1){
//         return true
//     }else{
//         return false
//     }
// }

// function countVowels(string){
//     let count = 0
    
//     for(let i = 0; i < string.length; i++){
//         if(isVowel(string[i])){
//             count += 1
//         }
//     }

//     return count
// }

// // console.log(countVowels('Hello'));

// // Recursive

// function recursiveCountVowels(str, stringLength){
//     if(stringLength == 1){
//         return Number(isVowel(str[0]))
//     }

//     return recursiveCountVowels(str, str.length - 1) + isVowel(str[stringLength - 1])
// }

// console.log(recursiveCountVowels('Hello', 'Hello'.length));


// ##################################### REVISION-1 ########################################################

function isVowel(char){
    let charLower = char.toLowerCase()
    let vowels = 'aeiou'

    if(vowels.includes(charLower) !== false){
        return true
    }else{
        return false
    }
}

// Iterative
function countVowels(str){
    let vowels = 0
    
    for (const char in str) {
        if(isVowel(str[char])){
            vowels++
        }
    }

    return vowels
}

// console.log(countVowels('Hello'));

// Recursive 
function countVowelsRecursive(str){
    if(str.length == 1) return Number(isVowel(str[str.length-1]))

    
    let count = Number(isVowel(str[str.length-1]))

    count += countVowelsRecursive(str.substring(0, str.length-1))

    return count
}

console.log(countVowelsRecursive('hello'))