function solution(n, wires) {
    const graph = Array.from({length: n+1}, () => []);  
    wires.forEach(([a,b]) => {
        // 전선마다 이어진 곳 확인
        graph[a].push(b);
        graph[b].push(a)
    })
    
    // 와이어가 끊어질 경우 이어진 송전탑(서브트리) 갯수 구하기
    function countNodes (root, exclude) {
        const visited = new Array(n+1).fill(false)
        function dfs (node) {
            visited[node] = true;
            return graph[node].reduce((count, next) => {
                // 제외할 노드이거나 이미 방문한 노드라면 현재 count 유지
                if (next === exclude || visited[next]) return count;
                // 방문하지 않은 노드라면 해당 노드(송전탑)과 이어진 노드(송전탑) 갯수 추가
                return count + dfs(next);
            // 초기 count를 1로 설정 (현재 자신)  
            }, 1);
        }
        return dfs(root); 
    }
    
    // 최소 차이 찾기  
    let minDiff = Infinity;  
    for (const [a, b] of wires) {  
        const count1 = countNodes(a, b);  
        const count2 = n - count1;  
        minDiff = Math.min(minDiff, Math.abs(count1 - count2));  
    }  
        
    return minDiff;
}