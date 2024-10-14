function powerRcr(num, pow){
    if(pow == 0) return 1

    return num * powerRcr(num, pow-1)
}

console.log(powerRcr(4, 2));
