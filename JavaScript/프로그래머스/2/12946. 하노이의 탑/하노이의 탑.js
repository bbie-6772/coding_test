function solution(n) {  
    const answer = [];  
    
    // 원반 갯수, 출발지, 도착지, 경유지
    function hanoi(n, from, to, via) {  
        if (n === 1) {  
            // 가장 작은 원반을 이동한 기록 저장
            answer.push([from, to]);  
            return;  
        }  
        // n-1 만큼을 경유지로 옮김(위에 쌓인 것들 처리)
        hanoi(n-1, from, via, to);  
        // 가장 큰 원반을 이동한 기록 저장 (맨 아래 깔린 원반을 3으로 이동)
        answer.push([from, to]);  
        // n-1 만큼을 경유지에서 도착지로 옮김(다음으로 원반으로 이동)
        hanoi(n-1, via, to, from);  
    }  
    
    hanoi(n, 1, 3, 2);  
    return answer;  
}  