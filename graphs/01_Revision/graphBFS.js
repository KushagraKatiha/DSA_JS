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
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      for (const neighbour of graph[node]) {
        queue.push(neighbour);
      }
    }
  }

  return result;
};

console.log(bfs(graph, "a"));
