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


function connectedIslandCount(graph ,count = 0){
    let visited = new Set()

    for(const node in graph){
        if(!visited.has(node)){
            dfs(graph, node, visited)
            count++
        }
    }

    return count
}

function dfs(graph, start, visited){
    if(!visited.has(start)){
        visited.add(start)
        for(const neighbour of graph[start]){
            dfs(graph, neighbour, visited)
        }
    }
}

console.log(connectedIslandCount(graph2));
