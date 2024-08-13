// Iterative
// Hello => 2

const countVowelsItr = (str) => {
    let count = 0
    let vowels = 'aeiouAEIOU'
    for(const char of str){
        if(vowels.includes(char)) count++
    }

    return count
}

console.log(countVowelsItr('Hello'));

// Recursive
// Hello => 2

const countVowelsRcr = (str) => {
    let vowels = 'aeiouAEIOU'
    let count = 0

    let vowelCount = (str) => {
        if(str == '') return str

        if(vowels.includes(str[str.length-1])) count++ 

        vowelCount(str.slice(0, str.length-1))
    }

    vowelCount(str)

    return count
}

console.log(countVowelsRcr('Hellof'));