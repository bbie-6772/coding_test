function solution(m, n, startX, startY, balls) {  
    const result = [];  
    
    for (const [targetX, targetY] of balls) {  
        let minDistance = Infinity;  
        
        // 벽에 부딪히는 경우: 위, 아래, 왼쪽, 오른쪽  
        // 위쪽 벽에 부딪히는 경우  
        if (!(startX === targetX && startY < targetY)) {  
            const reflectedY = 2 * n - startY;  
            const distance = Math.pow(startX - targetX, 2) + Math.pow(reflectedY - targetY, 2);  
            minDistance = Math.min(minDistance, distance);  
        }  
        
        // 아래쪽 벽에 부딪히는 경우  
        if (!(startX === targetX && startY > targetY)) {  
            const reflectedY = -startY;  
            const distance = Math.pow(startX - targetX, 2) + Math.pow(reflectedY - targetY, 2);  
            minDistance = Math.min(minDistance, distance);  
        }  
        
        // 왼쪽 벽에 부딪히는 경우  
        if (!(startY === targetY && startX > targetX)) {  
            const reflectedX = -startX;  
            const distance = Math.pow(reflectedX - targetX, 2) + Math.pow(startY - targetY, 2);  
            minDistance = Math.min(minDistance, distance);  
        }  
        
        // 오른쪽 벽에 부딪히는 경우  
        if (!(startY === targetY && startX < targetX)) {  
            const reflectedX = 2 * m - startX;  
            const distance = Math.pow(reflectedX - targetX, 2) + Math.pow(startY - targetY, 2);  
            minDistance = Math.min(minDistance, distance);  
        }  
        
        result.push(minDistance);  
    }  
    
    return result;  
}  