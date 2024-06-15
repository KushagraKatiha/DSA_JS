// Greatest Common Divisior 
// m , if(m == n)
// GCD(m-n, n), if(m > n)
// GCD(m, n-m) if(m < n)

function GCD(m , n){
    if(m == n) return m

    if(m > n) return GCD(m - n, n)
    if(m < n) return GCD(m, n - m)
}

console.log(GCD(42, 56));