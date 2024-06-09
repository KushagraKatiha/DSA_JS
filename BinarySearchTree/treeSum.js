// breadth

const treeSumWithBFS = (root) => {
    if(!root){
        return 0
    }

    const queue = [root]
    let sum = 0

    while(queue.length > 0){
        const node = queue.shift()
        sum += node.key 

        if(node.left){
            queue.push(node.left)
        }

        if(node.rigth){
            queue.push (node.right)
        }
    }
}

// depth

const treeSumWidthBFS = (root) => {
    if(!root){
        return 0
    }

    return root.key + treeSumWidthBFS(root.left) + treeSumWidthBFS(root.right)
}