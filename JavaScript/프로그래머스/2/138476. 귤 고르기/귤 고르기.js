function solution(k, tangerine) {
    let answer = 0;
    let box = {};
    
    tangerine.forEach((e) => {
        if (!box[e]) box[e] = 1
        else box[e]++
    })
    
    box = Object.values(box).sort((a,b) => b - a)
    
    for (let i = 1; i <= box.length;i++) {
        k -= box[i-1]
        answer = i
        if (k <= 0) break
    }
    
    return answer;
}