var isSymmetric = function(root) {

    if(root === null) return true

    return isMirror(root.left, root.right)    
};

function isMirror(leftRoot, rightRoot){
    
    if(leftRoot === null && rightRoot === null) return true
    if(leftRoot === null || rightRoot === null) return false

    if (leftRoot.val !== rightRoot.val) return false;

    let left = isMirror(leftRoot.left, rightRoot.right)
    let right = isMirror(leftRoot.right, rightRoot.left)

    return left && right
}
