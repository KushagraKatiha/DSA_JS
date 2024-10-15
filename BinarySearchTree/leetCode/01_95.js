var generateTrees = function(n) {
    if(n === 0) return []

    return buildTree(1, n)
};

function buildTree(start, end){
    let allTrees = []

    if(start > end){
        allTrees.push(null)
        return allTrees
    }

    for(let i = start; i <= end; i++){

        let leftTrees = buildTree(start, i-1)

        let rightTrees = buildTree(i+1, end)

        for(let left of leftTrees){
            for(let right of rightTrees){
                let currentNode = new TreeNode(i)

                currentNode.left = left
                currentNode.right = right

                allTrees.push(currentNode)
            }
        }
    }

    return allTrees
}