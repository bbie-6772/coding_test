function solution(arr1, arr2) {
    var answer = [[]];
    
    arr1.forEach((e, idx) => {
        if (!Array.isArray(answer[idx])) answer[idx] = []
        
        for(let i = 0;i < arr2[0].length;i++) {
            const cal = e.reduce((acc, cur, idx2) => {
                return acc += cur * arr2[idx2][i]
            },0)
            answer[idx].push(cal)
        }
    })
    
    return answer;
}