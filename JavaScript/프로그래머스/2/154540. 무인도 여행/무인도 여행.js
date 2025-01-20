function solution(maps) {  
    const n = maps.length;  
    const m = maps[0].length;  
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));  
    const islands = [];  

    // 4방향 탐색용 델타  
    const dx = [0, 0, 1, -1];  
    const dy = [1, -1, 0, 0];  

    // DFS로 섬 탐색 및 식량 합계 계산  
    function dfs(x, y) {  
        // 범위 벗어나거나 이미 방문했거나 바다면 0 반환  
        if (x < 0 || x >= n || y < 0 || y >= m ||   
            visited[x][y] || maps[x][y] === 'X') {  
            return 0;  
        }  

        visited[x][y] = true;  
        let food = +maps[x][y];  

        // 4방향 탐색  
        for (let k = 0; k < 4; k++) {  
            const nx = x + dx[k];  
            const ny = y + dy[k];  
            food += dfs(nx, ny);  
        }  

        return food;  
    }  

    // 모든 좌표 순회하며 섬 찾기  
    for (let i = 0; i < n; i++) {  
        for (let j = 0; j < m; j++) {  
            if (!visited[i][j] && maps[i][j] !== 'X') {  
                const islandFood = dfs(i, j);  
                islands.push(islandFood);  
            }  
        }  
    }  

    // 결과 반환 + 예외처리 추가
    return islands.length ? islands.sort((a, b) => a - b) : [-1];  
}  