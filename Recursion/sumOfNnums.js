// function sumOfN(num){
//     if(num == 0){
//         return 0
//     }

//     return num + sumOfN(num-1)
// }

// console.log(sumOfN(6));

// ##################################### REVISION-1 ########################################################

function sumOfN(num){
    if(num == 0) return 0

    return num + sumOfN(num - 1)
}

console.log(sumOfN(5));