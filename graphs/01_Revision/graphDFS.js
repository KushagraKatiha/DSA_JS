const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

let dfsItr = (graph, start) => {
  let stack = [start];
  let visited = new Set();
  let result = [];

  while (stack.length > 0) {
    let node = stack.pop();
    // Check if the node has not been visited
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

  return result;
};

let dfsRcr = (graph, start, result = [], visited = new Set()) => {
  if (!visited.has(start)) {
    result.push(start);
    visited.add(start);
  }

  for (const neighbour of graph[start]) {
    if (!visited.has(neighbour)) {
      dfsRcr(graph, neighbour, result, visited);
    }
  }

  return result;
};

console.log(dfsRcr(graph, "a"));

// console.log(dfsItr(graph, 'a'));
