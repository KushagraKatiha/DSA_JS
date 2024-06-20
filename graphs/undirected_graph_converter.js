/*
const edges = [
    ['b', 'a'],
    ['c', 'd'],
    ['b', 'c'], 
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
]

Write a function, undirectedPath, that take in an array of edges for an undirected graph and two nodes.

After that you can find and node etc.
Take care of cycle via visited technique.

*/

const undirectedPath = (edges) => {
    const graph = {}
    for(const edge of edges){
        const [a, b] = edge
        if(! (a in graph)){
            graph[a] = []
        }
        if(! (b in graph)){
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ['b', 'a'],
    ['c', 'd'],
    ['b', 'c'], 
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't']
]

console.log(undirectedPath(edges));
