let powerItr = (num, pow) => {
    let ans = 1

    for(let i = 0; i < pow; i++){
        ans *= num
    }

    return ans
}

console.log(powerItr(2, 4));

let powerRcr = (num, pow) => {
    if(pow == 0) return 0
    if(pow == 1) return num

    return num*powerRcr(num, pow-1)
}

console.log(powerRcr(2, 6));