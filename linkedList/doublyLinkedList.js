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

DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, this.tail, null)

    if(!this.tail){
        this.tail.next = newNode       
    }

    this.tail = newNode
    if(!this.head){
        this.head = newNode
    }
}

DoublyLinkedList.prototype.insertAtGivenNode = function(data, prev){
    const newNode = new Node(data, prev, prev.next)

    if(prev.next !== null){
        prev.next.prev = newNode
    }

    prev.next = newNode

    if(newNode.next == null){
        this.tail = newNode
    }
}

DoublyLinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    }else{
        this.head = this.head.next
        this.head.prev = null
    }
}

DoublyLinkedList.prototype.deleteLastNode = function(){
    if(!this.tail){
        return
    }

    if(this.head == this.tail){
        this.head = this.tail = null
    }else{
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function(){
    let current = this.head
    let temp = null

    while(current){
        temp = current.prev
        current.prev = current.next
        current.next = temp

        current = current.prev
    }

    if(!temp){
        this.tail = this.head
        this.head = temp.prev
    }
}





