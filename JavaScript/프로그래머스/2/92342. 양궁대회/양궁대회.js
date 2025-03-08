function solution(n, info) {  
    const dp = Array.from({ length: 12 }, () => Array(n + 1).fill(-Infinity));  
    // 현재 격차 적용
    dp[0][0] = info.reduce((acc,cur,idx) => acc -= cur > 0 ? 10-idx : 0,0);  

    // DP 테이블 채우기  
    for (let i = 0; i < 11; i++) {  
        // (i+1) 는 (10-i) 점의 점수판을 계산한 후를, j는 1~n번째 화살을 의미함
        for (let j = 0; j <= n; j++) {  
            // 불 필요 계산 회피
            if (dp[i][j] === -Infinity) continue;  
            
            // 라이언이 해당 점수를 맞히지 않는 경우 현재 격차 그대로 적용  
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);  

            // 라이언이 해당 점수를 맞히는 경우  
            const arrowsNeeded = info[i] + 1;  
            // 화살 수가 부족하면 계산 X
            if (j + arrowsNeeded > n) continue
            
            const scoreDiff = dp[i][j] + (10 - i) * (info[i] > 0 ? 2 : 1);  
            // 현재 격차와 계산한 격차 중 큰 것(양수)을 적용
            dp[i + 1][j + arrowsNeeded] = Math.max(dp[i + 1][j + arrowsNeeded], scoreDiff);  
        }  
    }   

    // 최대 점수 차이 찾기  
    let maxDiff = -Infinity;  
    let arrowsUsed = 0;  
    for (let j = 0; j <= n; j++) {  
        if (dp[11][j] <= maxDiff) continue
        
        maxDiff = dp[11][j];  
        arrowsUsed = j;  
    }  

    // 최대 점수 차이가 0 이하인 경우  
    if (maxDiff <= 0) return [-1];  

    // 화살 배분 복원  
    const result = new Array(11).fill(0);  
    let remainingArrows = arrowsUsed;  
    for (let i = 10; i >= 0; i--) {  
        // 화살 수가 충분할 때
        if (remainingArrows < info[i] + 1) continue
        
        const currentPoint = dp[i + 1][remainingArrows]
        const prevPoint = dp[i][remainingArrows - (info[i] + 1)]
        // 현재 화살을 쏜 뒤 얻은 점수와 쏘지 않고 얻은 점수 + 추가 점수를 계산할 때와 같으면
        if ( currentPoint !== prevPoint + (10 - i) * (info[i] > 0 ? 2 : 1)) continue
        
        // result에 쏜 화살 수 기입
        result[i] = info[i] + 1;  
        // remainingArrows 에 사용한 화살 가감
        remainingArrows -= info[i] + 1;  
    }  

    // 남은 화살은 0점에 배분  
    if (n > arrowsUsed) result[10] += n - arrowsUsed;  

    return result;  
}  