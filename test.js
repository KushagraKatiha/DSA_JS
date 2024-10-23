var findMode = function (root) {
  if (root == null) return [];

  function mode(node, freq = new Map()) {
    if (node == null) return;

    freq.set(node.val, (freq.get(node.val) || 0) + 1);

    mode(node.left, freq);
    mode(node.right, freq);

    return freq;
  }

  let frequencies = mode(root);

  let maxCount = Math.max(...frequencies.values());

  let modes = [];

  frequencies.forEach((val, key) => {
    if (val === maxCount) {
      modes.push(key);
    }
  });

  return modes;
};
