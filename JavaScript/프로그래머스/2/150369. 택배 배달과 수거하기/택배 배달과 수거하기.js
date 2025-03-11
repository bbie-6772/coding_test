function solution(cap, n, deliveries, pickups) {  
    let answer = 0;  
    let deliveryCap = 0;  
    let pickupCap = 0;  
    
    for (let i = n - 1; i >= 0; i--) {  
        // 집 순회하며 배달 + 수거 진행
        deliveryCap += deliveries[i];  
        pickupCap += pickups[i];  
        
        // 배달과 수거가 트럭의 용량을 초과하는 경우, 
        // 이동 거리를 계산하고 용량을 차감
        while (deliveryCap > 0 || pickupCap > 0) {  
            // cap 용량만큼 빼주어 Cap이 음수인 동안은 하나의 사이클을 의미함
            deliveryCap -= cap;  
            pickupCap -= cap;  
            answer += (i + 1) * 2;  
        }  
    }  
    
    return answer;  
}  