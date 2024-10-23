function shortestPath(edges, start, end){
    let graph = undirectedPath(edges)
    let queue = [[start, 0]]
    let visited = new Set()

    while(queue.length > 0){
        let [node, distance] = queue.shift()
        visited.add(node)

        if(node == end){
            return [node, distance]
        }

        for(const neighbour of graph[node]){
            if(!visited.has(neighbour)){
                queue.push([neighbour, distance+1])
            }
        }

    }

    return -1

}

function undirectedPath(edges) {
    let graph = {};
    for (const edgeArr of edges) {
      const [a, b] = edgeArr;
      if (!(a in graph)) {
        graph[a] = [];
      }
      graph[a].push(b);
      if (!(b in graph)) {
        graph[b] = [];
      }
      graph[b].push(a);
    }
  
    return graph;
  }