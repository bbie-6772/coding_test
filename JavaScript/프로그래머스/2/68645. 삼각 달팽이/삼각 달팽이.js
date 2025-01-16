function solution(n) {  
    // 2차원 배열 초기화 (0으로 채움)  
    const triangle = Array.from({ length: n }, () => Array(n).fill(0));  
    
    // 방향 벡터 (아래, 오른쪽, 왼쪽 위)  
    const dx = [1, 0, -1];  
    const dy = [0, 1, -1]; 
    
    let x = 0, y = 0;  // 시작 위치  
    let dir = 0;       // 초기 방향  
    let value = 1;     // 채울 값  
    let count = 0;     // 채워진 칸 수  

    // 칸이 원하는 만큼 채워졌을 때까지
    while (count < (n * (n + 1)) / 2) {  
        // 다음 위치에 값 삽입
        triangle[x][y] = value++;  
        // count 증가
        count++;  

        // 다음 위치 계산  
        let nx = x + dx[dir];  
        let ny = y + dy[dir];  

        // 방향 전환 조건  
        // triangle[nx][ny] !== 0 현재 값이 채워져 있으면 방향을 바꿈
        // nx < 0 || nx >= n 다음 x 값이 0보다 작아졌거나 n(최대 거리)보다 커졌다면
        // ny < 0 || ny >= n 다음 y 값이 0보다 작아졌거나 n(최대 거리)보다 커졌다면
        if (nx < 0 || nx >= n || ny < 0 || ny >= n || triangle[nx][ny] !== 0) {  
            // 현재 방향을 아래 -> 오른쪽 -> 왼쪽 위 방향 의 3패턴으로 변경
            dir = (dir + 1) % 3;  
            // 변경 후 위치 저장
            nx = x + dx[dir];  
            ny = y + dy[dir];  
        }  
        
        // 계산된 위치를 다음 위치로 지정
        x = nx;  
        y = ny;  
    }  
    
    // 1차원 배열로 변환 + 0 지우기
    return triangle.flat().filter(num => num !== 0);  
}  