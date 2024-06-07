class Node{
    constructor(data, prev = null, next = null){
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null
        this.prev = null
    }
}

DoublyLinkedList.prototype.insertAtBegning = function(data){
    const newNode = new Node(data, null, this.head)

    if(!this.head){
        this.head.prev = newNode
    }

    this.head = newNode
    this.head = newNode
    if(this.tail === null){
        this.tail = newNode
    }
}