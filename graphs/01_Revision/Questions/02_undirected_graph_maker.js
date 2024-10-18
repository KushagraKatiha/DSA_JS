/*
    const edges = [
        ['b', 'a'],
        ['c', 'a'],
        ['b', 'c'],
        ['q', 'r'],
        ['q', 's'],
        ['q', 'u'],
        ['q', 't']
    ]

    Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

    After that you can find and node path etc.
    Take care of cycles via visited technique.
*/

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["c", "q"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

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

let graph = undirectedPath(edges);
console.log(graph);


function dfsRcr(graph, start, result = [], visited = new Set()) {
  if (!visited.has(start)) {
    visited.add(start);
    result.push(start);
  }
  for (const neighbour of graph[start]) {
    if (!visited.has(neighbour)) {
      dfsRcr(graph, neighbour, result, visited);
    }
  }

  return result;
}

console.log(dfsRcr(graph, 'b'));


