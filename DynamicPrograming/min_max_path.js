let grid = [
    [1, 2, 4],
    [2, 3, 1],
    [2, 2, 0]
]

function minPathCostRecursive(graph, row = 0, col = 0, memo = {}){
    let r = graph.length
    let c = graph[0].length

    let pos = row + ',' + col

    if(
        row >= r || col >= c
    ){
        return Infinity
    }

    if(
        row === r - 1 && col === c - 1
    ){
        return graph[row][col]
    }

    if(pos in memo){
        return memo[pos]
    }
   
    memo[pos] = graph[row][col] +  Math.min(minPathCostRecursive(graph, row + 1, col, memo) , minPathCostRecursive(graph, row, col + 1, memo))
    return memo[pos]
}

console.log(minPathCostRecursive(grid))


function maxPathCostRecursive(graph, row = 0, col = 0, memo = {}){
    let r = graph.length
    let c = graph[0].length

    let pos = row + ',' + col

    if(
        row >= r || col >= c
    ){
        return -Infinity
    }

    if(
        row === r - 1 && col === c - 1
    ){
        return graph[row][col]
    }

    if(pos in memo){
        return memo[pos]
    }
   
    memo[pos] = graph[row][col] +  Math.max(maxPathCostRecursive(graph, row + 1, col, memo) , maxPathCostRecursive(graph, row, col + 1, memo))
    return memo[pos]
}

console.log(maxPathCostRecursive(grid))


