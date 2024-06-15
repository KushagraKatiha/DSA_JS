// // Iterative 

// function fib(value){
//     let n1 = 0
//     let n2 = 1

//     let i = 0
//     while(i < value){
//         let temp = n1 + n2
//         n1 = n2
//         n2 = temp
        
//         i++
//     }

//     return n1
// }

// // console.log(fib(6));

// // Recursive

// function recursiveFibb(value){
//     if(value <= 1){
//         return value
//     }

//     return recursiveFibb(value - 1) + recursiveFibb(value - 2)
// }

// console.log(recursiveFibb(8));

// ##################################### REVISION-1 ########################################################

// Iterative

function fib(num){
    let num1 = 0
    let num2 = 1

    for(let i = 0; i < num; i++){
        let temp = num1 + num2
        num1 = num2 
        num2 = temp
    }

    return num1
}

// console.log(fib(6));

// Recursive

function fibRecursive(num){
    if(num <= 1) return num

    return fibRecursive(num - 1) + fibRecursive(num - 2)
}

console.log(fibRecursive(5));