class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
}

LinkedList.prototype.insertAtBegining = function(data){
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
}

LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode
    }

    let last = this.head

    while(last.next){
        last = last.next
    }

    last.next = newNode
}

LinkedList.prototype.insertAfter = function(prevNode, data){
    if(!prevNode){
        return 'The given prevNode can not be accessed !'
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode
}

LinkedList.prototype.deleteFirst = function(){
    if(!this.head){
        return  'Head can not be empty !'
    }

    this.head = this.head.next
}

LinkedList.prototype.deleteLast = function(){
    if(!this.head){
        console.log('The list is empty !');
        return
    }

    if(!this.head.next){
        this.head = null
        return
    }

    let secondLast = this.head

    while(secondLast.next.next){
        secondLast = secondLast.next
    }
    
    secondLast.next = null
}

LinkedList.prototype.deleteKey = function(key){
    if(!this.head){
        console.log('The list is empty !')
        return 
    }

    if(this.head.data == key){
        this.head = this.head.next
        return
    }

    let current = this.head

    while(current.next){
        if(current.next.data === key){
            current.next = current.next.next
            return
        }
        current = current.next
    }

    console.log('No node found with given key !')
    return 
}

LinkedList.prototype.search = function(key){
    let current = this.head

    while(current){
        if(current.data == key){
            return true
        }
        current = current.next
    }

    return false
}

LinkedList.prototype.printList = function(){

    if(!this.head){
        console.log('No value in the list !');
        return
    }

    let current = this.head

    let listValues = []
    while(current){
        listValues.push(current.data)
        current = current.next
    }

    console.log(listValues.join(" -> "))
}

LinkedList.prototype.reverse = function(){
    let current = this.head
    let prev = null
    let next = null

    while(current){
        next = current.next
        current.next = prev
        prev = current
        current = next
    }
    this.head = prev
}

const LL = new LinkedList()
LL.insertAtBegining(1)
LL.insertAtBegining(2)
LL.insertAtBegining(3)
LL.insertAtBegining(6)
LL.insertAtBegining(8)
LL.insertAtBegining(9)
LL.insertAtEnd(0)
LL.insertAtEnd(7)
LL.insertAtEnd(11)

LL.deleteFirst()
LL.deleteLast()

LL.deleteKey(0)

console.log(LL.search(0))

LL.reverse()

LL.printList()
