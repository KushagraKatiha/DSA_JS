// count vowels in a string 

// Iterative

function isVowel(character){
    let lowerChar = character.toLowerCase()
    let vowels = 'aeiou'

    if(vowels.indexOf(lowerChar) != -1){
        return true
    }else{
        return false
    }
}

function countVowels(string){
    let count = 0
    
    for(let i = 0; i < string.length; i++){
        if(isVowel(string[i])){
            count += 1
        }
    }

    return count
}

// console.log(countVowels('Hello'));

// Recursive

function recursiveCountVowels(str, stringLength){
    if(stringLength == 1){
        return Number(isVowel(str[0]))
    }

    return recursiveCountVowels(str, str.length - 1) + isVowel(str[stringLength - 1])
}

console.log(recursiveCountVowels('Hello', 'Hello'.length));