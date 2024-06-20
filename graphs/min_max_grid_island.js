const grid = [
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1]
]

function minIsland(edges){
    let visited = new Set()
    let minIsland = Infinity

    let rows = edges.length
    let cols = edges[0].length

    function dfs(r, c){

        let pos = r + ',' + c

        if(
            r < 0 || r >= rows || c < 0 || c >= cols || edges[r][c] === 0 || visited.has(pos)
        ){
            return 0
        }

        visited.add(pos)

        let size = 1
        size += dfs(r+1, c)
        size += dfs(r-1, c)
        size += dfs(r, c+1)
        size += dfs(r, c-1)

        return size
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(edges[i][j] == 1 && !visited.has(i + ',' + j)){
                let size = dfs(i, j)
                if(size < minIsland){
                    minIsland = size
                }
            }
        }
    }

    return minIsland
}

function maxIsland(edges){
    let rows = edges.length
    let cols = edges[0].length

    let visited = new Set()
    let largestIsland = 0

    function dfs(r, c){
        let pos = r + ',' + c
        if(
            r < 0 || r >= rows || c < 0 || c >= cols || edges[r][c] === 0 || visited.has(pos)
        ){
            return 0
        }

        visited.add(pos)
        
        let size = 1
        size += dfs(r+1, c)
        size += dfs(r-1, c)
        size += dfs(r, c+1)
        size += dfs(r, c-1)

        return size
        
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(edges[i][j] == 1 && !visited.has(i + ',' + j)){
                let size = dfs(i, j)
                if(size > largestIsland){
                    largestIsland = size
                }
            }
        }
    }

    return largestIsland
}

console.log(minIsland(grid));
console.log(maxIsland(grid));