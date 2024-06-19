const grph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

const graphBFS = (graph, start, visited = new Set()) => {
    let queue = [ start ]

    while(queue.length > 0){
        let node = queue.shift()
            for(const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            
        }
    }
    return visited
}

console.log(graphBFS(grph, 'a'));