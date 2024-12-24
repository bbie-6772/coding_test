function solution(citations) {
    let answer = 0;
    
    citations.sort((a,b) => b-a)
    
    for (let i = 0;i < citations.length;i++) {
        answer = i
        if (citations.length < citations[i] ) answer = citations.length
        if (citations[i] <= i) break
    }
    
    return answer;
}