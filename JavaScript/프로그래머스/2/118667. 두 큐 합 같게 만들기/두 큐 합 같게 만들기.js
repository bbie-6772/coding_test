function solution(queue1, queue2) {
    const totalLength = queue1.length + queue2.length;
    const maxMoves = totalLength * 2
    
    let sum1 = queue1.reduce((acc,cur) => acc += cur, 0)
    let sum2 = queue2.reduce((acc,cur) => acc += cur, 0)
    const totalSum = sum1 + sum2;  
     if (totalSum % 2 !== 0)  return -1;
    
    let moves = 0;
    let q1Index = 0;
    let q2Index = 0;
    
    while (moves < maxMoves) {
        if (sum1 === sum2) return moves;  
        
        if (sum1 > sum2) {  
            const removed = queue1[q1Index++];  
            sum1 -= removed;  
            sum2 += removed;  
            queue2.push(removed);  
        } else {  
            const removed = queue2[q2Index++];  
            sum2 -= removed;  
            sum1 += removed;  
            queue1.push(removed);  
        }  
        
        moves++;  
    }
    
    return -1;
}