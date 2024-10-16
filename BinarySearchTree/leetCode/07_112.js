var hasPathSum = function (root, targetSum) {
  if (root === null) return false;

  let stack = [[root, root.val]];

  while (stack.length !== 0) {
    let [node, currentSum] = stack.pop();

    if (node.left === null && node.right === null) {
      if(currentSum === targetSum) return true
    }

    if (node.left) {
      stack.push([node.left, currentSum + node.left.val]);
    }

    if (node.right) {
      stack.push([node.right, currentSum + node.right.val]);
    }
  }

  return false
};

// var hasPathSum = function (root, targetSum) {
//   if (root === null) return false;

//   if (!root.left && !root.right) {
//     if (targetSum === root.val) {
//       return true;
//     } else return false;
//   }

//   let leftSubTree = hasPathSum(root.left, targetSum - root.val);
//   let rightSubTree = hasPathSum(root.right, targetSum - root.val);

//   return leftSubTree || rightSubTree;
// };
