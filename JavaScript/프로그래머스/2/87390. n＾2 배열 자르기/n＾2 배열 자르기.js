function solution(n, left, right) {
    let answer = [];
    
    
    for(let i = left;i <= right ;i++) {
        const row = i % n > 0 ? i % n + 1 : 1
        const column = Math.floor(i / n) +1
        
        if (row > column) answer.push(row)
        else if ( row <= column ) answer.push(column)
    }
    
    
    
    return answer;
}