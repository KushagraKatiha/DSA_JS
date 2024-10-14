function removeTandSRcr(string){
    if(string.length == 0) return ''
    if(string[0] == ' ' || string[0] == '\t') return removeTandSRcr(string.slice(1))

    return string[0] + removeTandSRcr(string.slice(1))
}

console.log(removeTandSRcr('H ell    o'));
