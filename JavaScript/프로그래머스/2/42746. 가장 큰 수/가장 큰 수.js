function solution(numbers) {  
    // 문자열로 변환 후 특별한 정렬 기준 적용  
    const answer = numbers  
        // 숫자를 문자열로 변환  
        .map(String)  
        // 조합했을 때 더 큰 숫자가 앞으로 오도록 정렬
        .sort((a, b) => (b + a) - (a + b)) 
        .join('');  
    
    // 전체가 0인 경우 "0" 반환  
    return answer[0] === '0' ? '0' : answer;  
} 