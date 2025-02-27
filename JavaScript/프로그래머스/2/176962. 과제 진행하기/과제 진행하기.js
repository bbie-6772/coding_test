function solution(plans) {
    var answer = [];
    const stack = [];
    
    // 시간 변환 함수
    const convertTimeToMinutes = (time) => {  
        const [hour, minute] = time.split(":");  
        return +hour * 60 + +minute;  
    };  
    
    // [1] 시간 순서대로 정렬해서 시작
    plans.sort((a,b) => convertTimeToMinutes(a[1]) - convertTimeToMinutes(b[1]))
    
    // [2] 다음 시간과의 차이(분) 을 확인
    for (let i = 0; i < plans.length;i++) {
        const [name, start, duration] = plans[i]
        const currentTime = convertTimeToMinutes(start)
        
        if(i === plans.length-1) {
            answer.push(name)
            while(stack.length > 0) answer.push(stack.pop()[0]);  
            break
        }
        
        const [nextN, nextS, nextD] = plans[i+1]
        const nextTime = convertTimeToMinutes(nextS)
    
        let remainingTime = nextTime - currentTime - +duration
        // [3] 빨리 끝났다면 차이에서 그만큼을 제외하고 대기열 확인
        if (remainingTime >= 0) {
            answer.push(name)
            while (stack.length > 0 && remainingTime > 0) {
                const [stackName, stackDuration] = stack.pop();
                if( remainingTime >= stackDuration ) {
                    answer.push(stackName)
                    remainingTime -= stackDuration
                } else {
                    stack.push([stackName, stackDuration - remainingTime])
                    break
                }
            }
        // [4] 만약 끝나지 않았다면 그만큼을 제외하고 대기열에 넣기
        } else stack.push([name, -remainingTime])
    }
    
    return answer;
}