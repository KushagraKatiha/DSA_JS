class BSTNode{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }

    insertion(key){
        const newNode = new BSTNode(key)

        if(!this.root){
            this.root = null
        }else{
            this.insert(this.root, newNode)
        }
    }

    insert(node, newNode){
        if(newNode.key < node.key){
            if(!node.left){
                node.left = newNode
            }else{
                this.insert(node.left, newNode)
            }
        }else if(newNode.key > node.key){
            if(!node.right){
                node.right = newNode
            }else{
                this.insert(node.right, newNode)
            }
        }
    }
}

