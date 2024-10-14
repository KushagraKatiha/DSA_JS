function fibbItr(num){
    let n = 0;
    let n1 = 1;

    for(let i = 0; i < num; i++){
        let temp = n + n1;
        n = n1
        n1 = temp
    }

    return n
}

// console.log(fibbItr(6));


function fibRcr(num){
    if(num <= 1) return num

    return fibRcr(num-1) + fibRcr(num-2)
}

console.log(fibRcr(6));

