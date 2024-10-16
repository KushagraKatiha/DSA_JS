var minDepth = function(root) {
    
    if(root === null) return 0

    let leftDepth = minDepth(root.left)
    let rightDepth = minDepth(root.right)

    if(root.left === null){
        return rightDepth
    }else if(root.right === null){
        return leftDepth
    }else{
        return 1 + Math.min(leftDepth, rightDepth)
    }
};
