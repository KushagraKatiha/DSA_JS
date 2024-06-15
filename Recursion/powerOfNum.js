// function powerOfNum(num, power){
//     if(power == 0){
//         return 1
//     }

//     return num * powerOfNum(num, power-1)
// }

// console.log(powerOfNum(3, 3));

// ##################################### REVISION-1 ########################################################

function powerOfNum(num, power){
    if(power == 0) return 1

    return num * powerOfNum(num, power - 1)
}

console.log(powerOfNum(15, 3));