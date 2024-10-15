class BSTNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

}

BST.prototype.insertNode = function(data){
    let newNode = new BSTNode(data)

    if(this.root === null){
        this.root = newNode
    }else{
        this.insert(this.root, newNode)
    }    
}

BST.prototype.insert = function(root, newNode){
    if(newNode.data < root.data){
        root.left = newNode
        if(root.left === null){
        }else{
            this.insert(root.left, newNode)
        }
    }else{
        if(root.right === null){
            root.right = newNode
        }else{
            this.insert(root.right, newNode)
        }
    }
}

BST.prototype.deleteNode = function(data){
    this.root = this.delete(this.root, data)
}

BST.prototype.delete = function(root, data){
    if(root == null){
        return null
    }   

    if(data < root.data){
        root.left = this.delete(root.left, data)
    }else if(data > root.data){
        root.right = this.delete(root.right, data)
    }else{
        if(root.left === null && root.right === null){
            return null
        }else if(root.left == null){
            return root.right
        }else if(root.right == null){
            return root.left
        }else{
            let tempNode = this.findMinNode(root.right)
            root.data = tempNode.data
            root.right = this.delete(root.right, tempNode.data)
        }
    }
}

BST.prototype.findMinNode = function(root){
    while(root.left != null){
        root = root.left
    }

    return root
}