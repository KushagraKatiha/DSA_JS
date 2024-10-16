var preorderTraversal = function(root) {
    return preorder(root)
};

function preorder(root, result = []){
    if(root === null) return []

    result.push(root.val)
    
    preorder(root.left, result)

    preorder(root.right, result)

    return result
}