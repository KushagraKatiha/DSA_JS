var isBalanced = function(root) {
    return checkTrue(root)[0]
};

function checkTrue(node){ 
    if(node === null) return [true, 0]

    let left = checkTrue(node.left)
    let right = checkTrue(node.right)

    let currentBalanced = left[0] && right[0] && (Math.abs(right-left) <= 1)

    return [currentBalanced, 1 + Math.max(left[1], right[1])]
}