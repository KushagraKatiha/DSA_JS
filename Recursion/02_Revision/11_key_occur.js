// [1, 2, 4, 2, 4, 2, 6]

function isKeyOccurRcr(key, arr, idx=0){
    if(arr.length == 0) return idx

    if(arr[0] == key) idx++

    return isKeyOccurRcr(key, arr.slice(1), idx)
}

function keyCountRcr(key, arr){
    if(arr.length == 1) return (arr[0] == key ? 1 : 0)

    return (arr[0] == key ? 1 : 0) + keyCountRcr(key, arr.slice(1, arr.length))
}

console.log(isKeyOccurRcr(4, [1, 2, 4, 2, 4, 2, 6]));
console.log(keyCountRcr(2, [1, 2, 4, 2, 4, 2, 6]));

