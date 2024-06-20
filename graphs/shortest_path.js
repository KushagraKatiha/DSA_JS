
const edges = [
    ['A', 'B'],
    ['A', 'F'],
    ['B', 'C'],
    ['C', 'D'],
    ['D', 'E'],
    ['E', 'F']
]


function createGraph(edges){
    let graph = {}

    for(const edge of edges){
        let [a, b] = edge
        // console.log(a, b);
        if(!(a in graph)){
            graph[a] = []
        }
        if(!(b in graph)){
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    console.log(graph);
}

createGraph(edges)