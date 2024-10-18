const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

const bfs = (graph, start) => {
  let result = [];
  let queue = [start];
  let visited = new Set();

  while (queue.length > 0) {
    let node = queue.shift();
    for(const neighbour of graph[node]){
      if(!visited.has(neighbour)){
        visited.add(neighbour)
        queue.push(neighbour)
        result.push(neighbour)
      }
    }
  }

  return result;
};

console.log(bfs(graph, "a"));
