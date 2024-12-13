function solution(s) {
    let answer = '';
    
    answer = s.split(" ").sort((a,b) => a - b).filter((e,idx,arr) => {
        if (idx === 0 || idx === arr.length - 1) return e
        else return false
    }).join(" ")
    
    return answer;
}