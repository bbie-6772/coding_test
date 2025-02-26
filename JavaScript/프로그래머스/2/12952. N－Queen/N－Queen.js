function solution(n) {  
    let answer = 0;  
    // 열 수
    const cols = new Array(n).fill(false);  
    // 왼쪽 위에서 오른쪽 아래 방향의 총 대각선 수
    const diagonal1 = new Array(2 * n - 1).fill(false); 
    // 오른쪽 위에서 왼쪽 아래 방향의 총 대각선 수
    const diagonal2 = new Array(2 * n - 1).fill(false);   

    const dfs = (row) => {  
        // 조건을 만족하는 row (queen 배치 가능 수)가 n개 멈춤
        if (row === n) {  
            answer++;  
            return;  
        }  

        // 열 수 만큼 반복
        for (let col = 0; col < n; col++) {  
            // 대각선 확인
            const d1 = row - col + n - 1; 
            const d2 = row + col;  

            // 배치된 위치와 이동 가능한 곳을 true로 설정한 뒤 dfs 실행
            if (!cols[col] && !diagonal1[d1] && !diagonal2[d2]) {  
                cols[col] = true;  
                diagonal1[d1] = true;  
                diagonal2[d2] = true;  

                dfs(row + 1);  
                    
                // 배치 위치 원복
                cols[col] = false;  
                diagonal1[d1] = false;  
                diagonal2[d2] = false;  
            }  
        }  
    };  

    dfs(0);  
    return answer;  
}  