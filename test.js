var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 !== str2 + str1) return ""

    console.log(str1.length);
    console.log(str2.length);

    if(str2.length === 0) return str1
    console.log(str1.length % str2.length);
    return str1.slice(0, str1.length % str2.length)
};

console.log(gcdOfStrings('ABCABCABC', 'ABC'));