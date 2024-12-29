function solution(progresses, speeds) {
    let answer = [];
    
    while(progresses.some((e) => e <= 100)) {
        let progress = 0;
        
        progresses = progresses.map((e, idx, arr) => {
            if (e >= 100 && !arr.some((e2,idx2) => e2 < 100 && idx2 < idx)) progress++
            else return e + speeds[idx]
        })
        if (progress > 0) answer.push(progress)
    }
    if(answer.length <= 0) answer.push(progresses.length)
    
    return answer;
}