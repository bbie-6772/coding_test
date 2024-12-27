function solution(want, number, discount) {
    var answer = 0;
    
    let Obj = Object.assign(...want.map((e, idx) => {
        return {[e]: number[idx]}
    }))
    
    for(let j = 0;j < 9;j++) if(discount[j] in Obj) Obj[discount[j]] -= 1
    
    for(let i = 0;i < discount.length-9;i++) {
        if(discount[i-1] in Obj) Obj[discount[i-1]] += 1
        if(discount[i+9] in Obj) Obj[discount[i+9]] -= 1
        if (Object.values(Obj).reduce((acc,cur) => {
            return acc += cur > 0 ? cur : 0
        },0) <= 0) {
            answer++
        }
    }
    
    return answer;
}