var isSameTree = function (p, q) {
  return isEqual(p, q);
};

function isEqual(rootA, rootB) {
  if (rootA === null && rootB === null) {
    return true;
  }

  if (rootA === null || rootB === null) {
    return false;
  }

  if (rootA.val !== rootB.val) {
    return false;
  }

  let isRightEqual = isEqual(rootA.left, rootB.left);
  let isLeftEqual = isEqual(rootA.right, rootB.right);

  return isRightEqual && isLeftEqual;
}
