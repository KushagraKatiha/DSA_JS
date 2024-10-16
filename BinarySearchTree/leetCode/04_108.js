// [-10, -3, 0, 5, 9]


var sortedArrayToBST = function(nums) {
    if(nums.length === 0) return []

    return buildTree(0, nums.length-1)
};

function buildTree(start, end, nums){
    if(start > end) return null

    let mid = Math.floor((start+end)/2)

    let root = new TreeNode(nums[mid])

    let leftSubTree = buildTree(start, mid-1)
    let rightSubTree = buildTree(mid+1, end)    

    root.left = leftSubTree
    root.rightSubTree = rightSubTree

    return root
}

console.log(sortedArrayToBST([-10, 2, 3, 4, 5, 8]));



