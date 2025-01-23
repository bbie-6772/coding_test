function solution(k, d) {
    let count = 0;  
    
    // x 좌표를 기준으로 최대 y 값을 계산
    for (let x = 0; x <= d; x += k) {  
        // 최대 y 좌표 계산 (피타고라스 정리 활용)  
        const maxY = Math.floor(Math.sqrt(d * d - x * x));  
        // 해당 x에서 가능한 y 좌표의 개수 계산  
        count += Math.floor(maxY / k) + 1;  
    }  
    
    return count;  
}