function solution(s) {
    var answer = [];
    let count = 0;
    let zeroCount = 0;
    
    while(s.length > 1) {
        s = s.replace(/0*/g, (match) => {
            zeroCount += match.length 
            return ""
        })
        s = s.length.toString(2) 
        count++
    }
    
    return [count, zeroCount];
}