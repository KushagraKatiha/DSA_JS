class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
}

BST.prototype.insertNode = function (data) {
  let newNode = new BSTNode(data);

  if (this.root === null) {
    this.root = newNode;
  } else {
    this.insert(this.root, newNode);
  }
};

BST.prototype.insert = function (root, newNode) {
  if (newNode.data < root.data) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      this.insert(root.left, newNode);
    }
  } else {
    if (root.right === null) {
      root.right = newNode;
    } else {
      this.insert(root.right, newNode);
    }
  }
};

BST.prototype.deleteNode = function (data) {
  this.root = this.delete(this.root, data);
};

BST.prototype.delete = function (root, data) {
  if (root == null) {
    return null;
  }

  if (data < root.data) {
    root.left = this.delete(root.left, data);
  } else if (data > root.data) {
    root.right = this.delete(root.right, data);
  } else {
    if (root.left === null && root.right === null) {
      return null;
    } else if (root.left == null) {
      return root.right;
    } else if (root.right == null) {
      return root.left;
    } else {
      let tempNode = this.findMinNode(root.right);
      root.data = tempNode.data;
      root.right = this.delete(root.right, tempNode.data);
    }
  }

  return root;
};

BST.prototype.findMinNode = function (root) {
  while (root.left != null) {
    root = root.left;
  }
  return root;
};

BST.prototype.inOrderTraversal = function () {
  const result = [];
  this.inOrder(this.root, result);
  return result;
};

BST.prototype.inOrder = function (root, result) {
  if (root !== null) {
    this.inOrder(root.left, result);
    result.push(root.data);
    this.inOrder(root.right, result);
  }
};

BST.prototype.preOrderTraversal = function () {
  const result = [];
  this.preOrder(this.root, result);
  return result;
};

BST.prototype.preOrder = function (root, result) {
  if (root !== null) {
    result.push(root.data);
    this.preOrder(root.left, result);
    this.preOrder(root.right, result);
  }
};

BST.prototype.postOrderTraversal = function () {
  const result = [];
  this.postOrder(this.root, result);
  return result;
};

BST.prototype.postOrder = function (root, result) {
  if (root !== null) {
    this.postOrder(root.left, result);
    this.postOrder(root.right, result);
    result.push(root.data);
  }
};

BST.prototype.dfs = function () {
  let result = [];
  let stack = [this.root];

  while (stack.length !== 0) {
    let node = stack.pop();

    if (node) {
      result.push(node.data);

      if (node.right) {
        stack.push(node.right);
      }

      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  return result;
};

BST.prototype.dfsR = function(root = this.root){
    if(root === null){
        return []
    }

    let leftValues = this.dfsR(root.left)
    let rightValues = this.dfsR(root.right)

    return [root.data, ...leftValues, ...rightValues]
}

BST.prototype.bfs = function(){
    let result = []
    let queue = [this.root]

    while(queue.length){
        let node = queue.shift()
        
        if(node){
            result.push(node.data)
            if(node.left){
                queue.push(node.left)
            }    

            if(node.right){
                queue.push(node.right)
            }
        }
    }

    return result
}

let myBST = new BST()

myBST.insertNode(5)
myBST.insertNode(6)
myBST.insertNode(7)
myBST.insertNode(2)
myBST.insertNode(9)
myBST.insertNode(1)
myBST.insertNode(0)
myBST.insertNode(8)
myBST.insertNode(3)

console.log(myBST.dfsR());

