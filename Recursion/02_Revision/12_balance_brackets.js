// Input = ["(", "(", ")", ")", "(", ")"]

function balancePar(array, startIndex = 0, currentIndex = 0){
    if(startIndex == array.length){
        return currentIndex == 0
    }

    if(array[startIndex] == '('){
        startIndex++
        currentIndex++
    }else if(array[startIndex] == ')'){
        startIndex++
        currentIndex--
    }

    return balancePar(array, startIndex, currentIndex)
}

console.log(balancePar(["(", "(", ")", ")", "(", ")"]));
