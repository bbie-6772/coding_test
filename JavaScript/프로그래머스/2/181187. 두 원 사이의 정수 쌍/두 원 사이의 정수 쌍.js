function solution(r1, r2) {
    let answer = 0;
    let zero = r2-r1+1;
    
    for (let x = 0; x <= r2; x++) {  
        // 최대 Y
        const maxY = Math.floor(Math.sqrt(r2**2 - x**2));  
        // 최소 Y
        const minY = Math.ceil(Math.sqrt(Math.max(0, r1**2 - x**2)));  
        // 최대와 최소 사이의 정수값들 계산
        answer += maxY - minY + 1;  
    }  
    
    return answer * 4 - zero * 4;   
}