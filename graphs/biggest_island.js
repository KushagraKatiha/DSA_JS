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

const grph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

const newGraph2 = {
    // Component 1
    A: ['B'],
    B: ['A'],

    // Component 2
    C: ['D', 'E'],
    D: ['C'],
    E: ['C'],

    // Component 3 (largest component with 5 nodes)
    F: ['G', 'H'],
    G: ['F', 'I'],
    H: ['F', 'I', 'J'],
    I: ['G', 'H'],
    J: ['H'],

    // Component 4
    K: ['L'],
    L: ['K'],

    // Component 5
    M: ['N', 'O'],
    N: ['M'],
    O: ['M']
}


const biggestIsland = (graph, visited = new Set()) => {
    let largestComponent = 0
    let islandNumber = 0
    
    const dfs = (node) => {
        if(visited.has(node)){
            return 0
        }
        visited.add(node)
        let size = 1
        for(const neighbour of graph[node]){
            size += dfs(neighbour)
        }
        return size
    }

    for(const node in graph){
        if(!visited.has(node)){
            const size = dfs(node)
            if(largestComponent < size){
                islandNumber++
                largestComponent = size
            }
        }
    }

    return {largestComponent, islandNumber}
}

console.log(biggestIsland(newGraph));
let {largestComponent: nodes, islandNumber: island} = biggestIsland(newGraph2);
console.log(`Largest island is ${island} with ${nodes} nodes`);
console.log(biggestIsland(grph));