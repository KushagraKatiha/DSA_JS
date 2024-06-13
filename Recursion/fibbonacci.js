// Iterative 

function fib(value){
    let n1 = 0
    let n2 = 1

    let i = 0
    while(i < value){
        let temp = n1 + n2
        n1 = n2
        n2 = temp
        
        i++
    }

    return n1
}

// console.log(fib(6));

// Recursive

function recursiveFibb(value){
    if(value <= 1){
        return value
    }

    return recursiveFibb(value - 1) + recursiveFibb(value - 2)
}

console.log(recursiveFibb(8));