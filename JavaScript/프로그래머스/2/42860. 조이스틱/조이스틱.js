function solution(name) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    let answer = 0;
    
    // 이동 경로 계산
    let minMove = name.length - 1;
     // 왼쪽에서 오른쪽을 밀다가 반대로 가는 경우
    for (let i = 0; i < name.length; i++) {  
        answer += Math.min(alphabet.indexOf(name[i]),26 - alphabet.indexOf(name[i]) )
        
        let next = i + 1; 
        while (next < name.length && name[next] === "A") next++
        
        minMove = Math.min(minMove, Math.min(i*2 + (name.length - next), 2* (name.length-next) + i))
    }   
    
    return answer + minMove;
}