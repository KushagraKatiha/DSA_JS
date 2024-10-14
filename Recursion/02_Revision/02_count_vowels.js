// find vowels in the string
function isVowel(char){
    let lowerChar = char.toLowerCase()
    let vowels = 'aeiou'
    return vowels.includes(lowerChar)
}

function countVowelsRcr(string){
    if(string.length === 1) return Number(isVowel(string[0]))

    return countVowelsRcr(string[0]) + countVowelsRcr(string.substring(1, string.length))
}

console.log(countVowelsRcr('Hellooooooooo'));
