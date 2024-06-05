class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        if(this.isEmpty()){
            return
        }else{
            this.queue.shift()
        }
    }

    length(){
        return this.queue.length
    }

    isEmpty(){
        if(this.length() === 0){
            return true
        }else{
            return false
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'Queue is Empty !'
        }else{
            return this.queue[0]
        }
    }

    printQueue(){
        if(this.isEmpty()){
            return 'Queue is Empty !'
        }else{
            let str = ''
            for(let i = 0; i < this.queue.length; i++){
                str += '| ' + this.queue[i] + ' '
            }
            return str
        }
    }

    clearQueue(){
        this.queue = []
    }
}

let myQueue = new Queue()

myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.enqueue(6)

console.log(myQueue.printQueue());