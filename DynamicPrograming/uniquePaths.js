var uniquePaths = function(m, n) {
    let graph = new Array(m).fill(null).map(() => new Array(n).fill(0))

    return uniquePathRecursive(graph)
};


function uniquePathRecursive(graph, row = 0, col = 0){
    let r = graph.length
    let c = graph[0].length

    if(
        (row >= r || col >= c) || (graph[row][col] === 'X')
    ){
        return 0
    }

    if(
        (row == r - 1 && col == c - 1)
    ){
        return 1
    }

    if(graph[row][col] !== 0) return graph[row][col]

    graph[row][col] = uniquePathRecursive(graph, row + 1, col) + uniquePathRecursive(graph, row, col + 1)
    // console.log(graph);
    return graph[row][col]
}

console.log(uniquePaths(23, 12))