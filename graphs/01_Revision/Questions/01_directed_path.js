/*
Given two nodes (start and dest) in a directed acyclic graph(DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1: 
Input: start = 1, dest = 3
Output: true

Example 2: 
Input: start = 1, dest = 4
Output: false
*/

function isPathThere(graph, start, dest, visited = new Set()){
    if(start == dest) return true
    if(!visited.has(start)){
        visited.add(start)
        for(const neighbour of graph[start]){
            if(isPathThere(graph, neighbour, dest, visited)){
                return true
            }
        }
    }
    return false
}

function isPathThereDfs(graph, start, dest){
    let stack = [start]
    let visited = new Set()

    while(stack.length > 0){
        let node = stack.pop()
        if (node == dest) return true

        if(!visited.has(node)){
            visited.add(node)
            for(const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    stack.push(neighbour)
                }
            }
        }
    }

    return false
}

function isPathThereBfs(graph, start, dest){
    let queue = [start]
    let visited = new Set()

    while(queue.length > 0){
        const node = queue.shift()
        if(node === dest) return true

        if(!visited.has(node)){
            visited.add(node)

            for(const neighbour of graph[node]){
                queue.push(neighbour)
            }
        }
    }

    return false
}