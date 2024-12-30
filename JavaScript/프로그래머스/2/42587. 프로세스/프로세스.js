function solution(priorities, location) {
    let answer = 0;
    let temp = 0;
    let startIdx = 0;
    
    while (priorities.some((e,idx,arr) => e !== 0 && idx === location)) {
        const maxNumber = Math.max(...priorities)
        priorities = priorities.map((e,idx) => {
            if (e === maxNumber && idx >= startIdx) {
                temp++
                if (idx === location) answer = temp
                return 0
            } else if(e === 0) return null
            else return e
        })
        startIdx = priorities.lastIndexOf(0)
    }
    
    return answer;
}