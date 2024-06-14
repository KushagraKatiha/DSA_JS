// Breadth 

function treeSumBFS(root){
    if(!root){
        return 0
    }

    let sum = 0
    let queue = [root]

    while(queue.length > 0){
        let node = queue.shift()
        sum += node.key

        if(node.left){
            queue.push(node.left)
        }
        if(node.right){
            queue.push(node.right)
        }
    }

    return sum
}

// Depth

function treeSumDFS(root){
    if(!root){
        return 0
    }

    let sum = root.key
    sum += treeSumBFS(root.left) + treeSumBFS(root.right)

    return sum
}

module.exports = {
    treeSumBFS,
    treeSumDFS
}