// class treeNode{
//     constructor(key){
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }

const depthFirstTraversal = (root) => {
    const values = []
    const stack = [root]

    if(!root){
        return
    }

    while(stack.length > 0){
        const node = stack.pop()
        values.push(node.key)

        if(node.right){
            stack.push(node.right)
        }

        if(node.left){
            stack.push(node.left)
        }
    }

    return values
}

const recursiveDepthFirstTraversal = (root) => {
    if(!root){
        return []// return empty array or message
    }

    const leftValues = recursiveDepthFirstTraversal(root.left)
    const rightValues = recursiveDepthFirstTraversal(root.right)

    return [root.key, ...leftValues, ...rightValues]
}

module.exports = recursiveDepthFirstTraversal