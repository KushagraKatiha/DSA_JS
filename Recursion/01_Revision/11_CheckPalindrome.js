// Iterative
let str = 'maam'
let ifPallindromeItr = (str) => {
    if(str.length == 1) return true
    let i = 0
    let j = str.length-1

    while(i < j){
        if(str[i] === str[j]){
            i++
            j--
        }else{
            return false
        }
    }

    return true
}

console.log(ifPallindromeItr(str));

// Recursive
let ifPallindromeRcr = (str) => {
    if(str.length === 1) return true
    if(str === '') return true

    if(str[0] == str[str.length-1]){
        return ifPallindromeRcr(str.substring(1, str.length-1))
    }else{
        return false
    }
}

console.log(ifPallindromeRcr(str));