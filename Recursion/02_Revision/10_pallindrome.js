// madam

function isPallItr(string){
    let i = 0; 
    let j = string.length-1

    while(j >= i){
        if(string[i] == string[j]){
            i++; j--
        }else{
            return false
        }
    }

    return true
}
// console.log(isPallItr('madam'));

function isPallRcr(string){
    if(string.length == 1) return true

    if(string[0] == string[string.length-1])
        return isPallRcr(string.substring(1, string.length-1))
    else
        return false
}

console.log(isPallRcr('madam'));
