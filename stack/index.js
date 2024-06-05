class Stack{
    constructor(){
        this.stack = []
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        if(this.isEmpty()){
           return
        }else{
            this.stack.pop()
        }
    }

    peek(){
        if(this.isEmpty()){
            return 'Stack is Empty !' 
        }else{   
            return this.stack[this.stack.length-1]
        } 
    }

    length(){
        return this.stack.length
    }

    isEmpty(){
        if(this.length() === 0){
            return true
        }else{
            return false
        }
    }

    printStack(){
        if(this.isEmpty()){
            return 'Stack is Empty !'
        }else{
            let str = ""
            for (let i = this.stack.length - 1; i >= 0; i--) {
                str += '---' + '\n' + '|' + this.stack[i] + '|' +'\n'
            }
            return str + '---'
        }
    }

    contains(element){
        return this.stack.includes(element)
    }

    clearStack(){
        this.stack = []
    }
}

let myStack = new Stack
myStack.push(2)
myStack.push(4)
myStack.push(5)
myStack.push(1)


myStack.pop()
// console.log(myStack.printStack());

// console.log(myStack.peek());

myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
console.log(myStack.printStack());
console.log(myStack.peek());