// Length without length 

function countLength(str){
    if(!str) return 0
    
    if(str){
        return 1 + countLength(str.substring(1))
    }
}

console.log(countLength('This is Pro Coder !'));