function solution(topping) {  
    let answer = 0;  
    let leftCount = {};  
    let rightCount = {};  
    
    // 오른쪽 세트 초기화  
    for (const t of topping) rightCount[t] = (rightCount[t] || 0) + 1;  
    
    let leftSize = 0;  
    let rightSize = Object.keys(rightCount).length;  
    
    for (let i = 0; i < topping.length; i++) {  
        // 왼쪽으로 토핑 이동  
        let currentTop = topping[i];  

        // 왼쪽 카운트 해제  
        if (leftCount[currentTop] === undefined) {  
            leftCount[currentTop] = 0;  
            leftSize++;  
        }  
        leftCount[currentTop]++;  
        
        // 오른쪽 카운트 해제  
        rightCount[currentTop]--;  
        if (rightCount[currentTop] === 0) rightSize--;  
        
        // 조건이 성립하면 답 증가  
        if (leftSize === rightSize) answer++;  
    }  
    
    return answer;  
}  