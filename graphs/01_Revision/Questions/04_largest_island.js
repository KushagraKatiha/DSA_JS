const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

const graph2 = {
    b: [ 'a', 'c' ],
    a: [ 'b', 'c' ],
    c: [ 'a', 'b', 'q' ],
    q: [ 'c', 'r', 's', 'u', 't' ],
    r: [ 'q' ],
    s: [ 'q' ],
    u: [ 'q' ],
    t: [ 'q' ]
  }

const largestIsland = (graph) => {
    let visited = new Set()
    let largestCount = 0

    for(const node in graph){
        if(!node) return 
        let graphCount = dfs(graph, node, visited)
        if(graphCount >= largestCount){
            largestCount = graphCount
        }
    }

    return largestCount
}

function dfs(graph, node, visited) {
    visited.add(node);
    let count = 1;  

    for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
            count += dfs(graph, neighbour, visited);  
        }
    }

    return count;
}

console.log(largestIsland(graph2))