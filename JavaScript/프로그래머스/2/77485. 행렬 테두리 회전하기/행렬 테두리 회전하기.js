function solution(rows, columns, queries) {
    let answer = [];
    let arr = Array.from({ length: rows }, (_, rowIndex) =>   
        Array.from({ length: columns }, (_, colIndex) =>   
            rowIndex * columns + colIndex + 1  
        )  
    );  
    
    // 아래 , 오른쪽 , 위 , 왼쪽
    const dx = [1, 0, -1, 0]
    const dy = [0, 1, 0, -1]
    
    for (const [x1, y1, x2, y2]  of queries) {
        // 인덱스가 0부터 시작하기에 숫자 조정
        const [startRow, startCol, endRow, endCol] = [x1-1, y1-1, x2-1, y2-1];
        
        // 최솟값 변수
        let minValue = Infinity;  
        // 시작값 저장
        const temp = arr[startRow][startCol];  
        
        // 시계방향 회전 변수
        let currentDirection = 0;  
        let currentRow = startRow;  
        let currentCol = startCol;  
        
        while (currentDirection < 4) {  
            // 반시계 방향으로 값 추적
            const nextRow = currentRow + dx[currentDirection];  
            const nextCol = currentCol + dy[currentDirection];  
            
            // 다음 값이 범위 내에 있는지 확인
            if (nextRow >= startRow && nextRow <= endRow &&   
                nextCol >= startCol && nextCol <= endCol) {  
                // 최솟값 확인
                minValue = Math.min(minValue, arr[currentRow][currentCol]);  
                // 회전 값 수정
                arr[currentRow][currentCol] = arr[nextRow][nextCol] 
                
                currentRow = nextRow;  
                currentCol = nextCol;  
            } else {  
                // 범위를 벗어나면 회전방향 변경
                currentDirection++;  
            }  
        }  
        
        // 처음 값을 마지막에 대입
        arr[startRow][startCol + 1] = temp;  
        minValue = Math.min(minValue, temp);  
        
        // 최솟값 리턴용
        answer.push(minValue);  
    } 
    
    return answer;
}