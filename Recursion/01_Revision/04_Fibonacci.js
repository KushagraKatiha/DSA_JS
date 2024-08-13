function fibItr(value){
    let a = 0
    let b = 1

    for(let i = 0; i < value; i++){
        let temp = a + b
        a = b
        b = temp
    }

    return a
}

console.log(fibItr(5));

// 0 1 1 2 3 5 8

function fibRcr(value){
    if(value == 0) return 0
    if(value == 1) return 1

    return fibRcr(value - 1) + fibRcr(value - 2)
}

console.log(fibRcr(6));