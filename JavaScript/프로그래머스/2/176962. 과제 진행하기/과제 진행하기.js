function solution(plans) {
    var answer = [];
    const stack = [];
    let currentTime = 0;
    
    // [1] 시간 순서대로 정렬해서 시작
    plans.sort((a,b) => {
        let [ aHour, aMinutes] = a[1].split(":")
        aMinutes = +aMinutes + +aHour * 60
        let [ bHour, bMinutes]  = b[1].split(":")
        bMinutes = +bMinutes + +bHour * 60
        return aMinutes - bMinutes
    })
    
    // [2] 다음 시간과의 차이(분) 을 확인
    for (let i = 0; i < plans.length;i++) {
        const [name, start, duration] = plans[i]
        const [ hour, minutes] = start.split(":")
        const currentTime = +minutes + +hour * 60
        
        if(i === plans.length-1) {
            answer.push(name)
            while(stack.length > 0) {
                const [ nName, nDuration ] =stack.pop();
                answer.push(nName)
            }
            break
        }
        
        const [nextN, nextS, nextD] = plans[i+1]
        const [ nHour, nMinutes] = nextS.split(":")
        const nextTime = +nMinutes + +nHour * 60
    
        let time = nextTime - currentTime - +duration
        // [3] 빨리 끝났다면 차이에서 그만큼을 제외하고 대기열 확인
        if (time === 0) answer.push(name)
        else if (time > 0) {
            answer.push(name)
            while (stack.length > 0) {
                let [nName, nDuration] = stack.pop();
                const result = time - nDuration
                if(result < 0) {
                    nDuration -= time
                    stack.push([nName, nDuration])
                    break 
                } 
                answer.push(nName)
                time = result
            }
        // [4] 만약 끝나지 않았다면 그만큼을 제외하고 대기열에 넣기
        } else if (time < 0) stack.push([name, -time])
    }
    
    return answer;
}