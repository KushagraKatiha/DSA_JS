const recursiveDepthFirstTraversal = require('./dfs.js')
const breadthFirstSearch = require('./bfs.js')
const {treeSumBFS, treeSumDFS} = require('./treeSum.js')

class BSTNode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new BSTNode(key)
        if(!this.root){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(!node.left){
                node.left = newNode
            }else{
                this.insertNode(node.left, newNode)
            }
        }else{
            if(!node.right){
                node.right = newNode
            }else{
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){
        if(!node){
            return null
        }

        if(key < node.key){
            node.left = this.deleteNode(node.left, key)
        }else if(key > node.key){
            node.right = this.deleteNode(node.right, key)
        }else{
            if(!node.left && !node.right){
                return null
            }else if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left
            }else{
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    findMinNode(node){
        while(node.left){
            node = node.left
        }
        return node
    }

    inOrderTraversal(){
        let result = []
        this.inorder(this.root, result)
        return result
    }

    inorder(node, result){
        if(node){
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)
        }
    }

    recursiveDepthFirstTraversal(){
        return recursiveDepthFirstTraversal(this.root)
    }

    breadthFirstSearch(){
        return breadthFirstSearch(this.root)
    }

    treeSumBFS(){
        return treeSumBFS(this.root)
    }

    treeSumDFS(){
        return treeSumDFS(this.root)
    }

}

const myTree = new BinarySearchTree()

myTree.insert(5)
myTree.insert(6)
myTree.insert(9)
myTree.insert(1)
myTree.insert(2)
myTree.insert(0)
myTree.insert(7)

// myTree.delete(5)
// myTree.delete(7)

console.log(myTree.recursiveDepthFirstTraversal())
console.log(myTree.breadthFirstSearch())

console.log(myTree.inOrderTraversal())

console.log(myTree.treeSumBFS());
console.log(myTree.treeSumDFS());

// console.log(myTree);