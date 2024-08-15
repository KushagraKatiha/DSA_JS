let gcdItr = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcdItr(36, 60));

let gcdRcr = (a, b) => {
    // Base case: if b is 0, then a is the GCD
    if (b === 0) {
        return a;
    }
    // Recursive case: call gcdRec with b and a % b
    return gcdRcr(b, a % b);
}

console.log(gcdRcr(36, 60)); // Output should be 12
