const grid = [
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1],
    [0, 1, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1]
]

function isLandCount(grid){
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let count = 0
    
    function dfs(r, c){
        const pos = r + ',' + c
        
        if(r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0 || visited.has(pos)){
            return 0
        }
        
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
    
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            if(grid[i][j] === 1 && !visited.has(i + ',' + j)){
                visited.add(i + ',' + j)                
                count++
                dfs(i, j)
            }
        }
    }

    return count
}

console.log(isLandCount(grid))