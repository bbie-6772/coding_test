function solution(weights) {
    var answer = 0;
    // 결국은 2:2 1 / 2:3 1.5 / 2:4 2 / 3:4 0.75 배인 경우를 찾는 거네 ?
    const weightsMap = new Map()
    // [1] 겹치는 수 구분 + 계산을 위해 숫자 세기
    for (const number of weights) {
        if (weightsMap.has(number)) weightsMap.set(number, weightsMap.get(number) + 1)
        else weightsMap.set(number, 1)
    }
    // [2] 조건에 맞는 숫자를 찾아 계산하기
    for (const [number, count] of weightsMap) {
        // 같은 숫자끼리 짝을 이루는 경우  
        if (count > 1) {  
            answer += (count * (count - 1)) / 2;
        }       
        
        const numbers = [weightsMap.get(number*3/2),
                         weightsMap.get(number*4/2), 
                         weightsMap.get(number*4/3)]
        answer += numbers.reduce((acc, cur) => 
        {
            if(cur) return acc += cur * count
            return acc
        },0)
    }
    return answer;
}