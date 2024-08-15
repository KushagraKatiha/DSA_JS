// iteration
let spaceAndTabsItr = (str) => {
    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' ' || str[i] == '\t'){
            continue
        }
        newStr += str[i]
    }

    return newStr
} 

console.log(spaceAndTabsItr('Hel l o'));

// recursion
let spaceAndTabsRcr = (str) => {
    if(str == '') return str
    if(str == ' ' || str == '\t') return ''
    if(str[0] == ' ' || str == '\t') return spaceAndTabsItr(str.slice(1))

    return str[0] + spaceAndTabsItr(str.slice(1))
}

console.log(spaceAndTabsRcr(' Hel l o'));