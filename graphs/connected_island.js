// const grph = {
//     a: ['b', 'c'],
//     b: ['a', 'c', 'd'],
//     c: ['a', 'b', 'd'],
//     d: ['b', 'c'],
//     e: ['f'],
//     f: ['e']
// }

// const grph2 = {
//     1: [2, 'a'],
//     a: [1],
//     2: [1, 3],
//     3: [2],
//     4: [5],
//     5: [4, 6, 7],
//     6: [5],
//     7: [8],
//     8: [7],
//     9: []

// }

const newGraph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'E'],
    D: ['B', 'F'],
    E: ['C', 'G'],
    F: ['D'],
    G: ['E'],
    H: ['I'],
    I: ['H', 'J'],
    J: ['I'],
    K: []
}


const connectedIsland = (graph, visited = new Set()) => {
    let count = 0

    const dfs = (node) => {
        if(!visited.has(node)){
            visited.add(node)
            for(const neighbour of graph[node]){
                dfs(neighbour)
            }
        }
    }
    
    for(const node in graph){
        if(!visited.has(node)){
            dfs(node)
            count++
        }
    }

    return count
}

console.log(connectedIsland(newGraph));