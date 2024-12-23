function solution(s) {
    var answer = 0;
    let stack = {};
    const start  = ["[","(","{"]
    const end = ["]",")","}"]
    
    s = s.split("")
    
    for(let i = 0; i < s.length; i++) {
        s.forEach((e) => stack[e] = 0) 
        
        s.forEach((e) => {
            const idx = start.findIndex((el) => el === e[0])
            if (idx !== -1 && stack[e] >= stack[end[idx]]) stack[e] += 1
            else if (idx === -1) stack[e] += 1
        })
        start.some((e, idx) => stack[start[idx]] - stack[end[idx]] !== 0) ? 0 : answer++
        
        const temp = s.splice(0, 1)
        s = [...s,temp]
    }

    
    
    return answer;
}