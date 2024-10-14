function lengthWL(string){
    if(string == '') return 0

    return 1 + lengthWL(string.substring(1))
}

console.log(lengthWL('Hellokjkj'));
