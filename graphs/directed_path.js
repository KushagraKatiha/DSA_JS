/* 
Given two nodes (start and dest) in a directed acyclic graph(DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1: 

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.

Example 2: 

Input: start = 1, dest = 4
Output: false 
Explanation: There is no path from 1 to 4.
*/

const grph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e']
}

function hasPathDFS(graph, start, dest){
    const stack = [ start ]
    const visited = new Set()
    
    // if(start == dest) return true
    while(stack.length > 0){
        const node = stack.pop()
        if(!visited.has(node)){
            if(node == dest) return true
            visited.add(node)
            for(const neighbour of graph[node]){
                stack.push(neighbour)
                // if(neighbour == dest) return true
            }
        }
    }
    return false
}

console.log(hasPathDFS(grph, 'a', 'a'));

const hasPathBFS = (graph, start, dest) => {
    const queue = [ start ]
    const visited = new Set()

    while(queue.length > 0){
        const node = queue.shift()
        if(node == dest) return true
        if(!visited.has(node)){
            visited.add(node)
            for(const neighbour of graph[node]){
                queue.push(neighbour)
            }
        }
    }
    return false
}

console.log(hasPathBFS(grph, 'a', 'e'));

const hasPathR = (graph, start, dest, visited = new Set()) => {
    if(start == dest) return true
    if(visited.has(start)) return false

    visited.add(start)

    for(const neighbour of graph[start]){
        if(hasPathR(grph, neighbour, dest, visited) == true){
            return true
        }
    }

    return false
}

console.log(hasPathR(grph, 'a', 'e'));