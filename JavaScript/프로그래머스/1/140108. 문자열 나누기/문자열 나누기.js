function solution(s) {
    var answer = 0;
    s = s.split("")
    
    while (s.length > 0) {
        const [x] = s.slice(0,1)
        let equal = 0;
        let nEqual = 0;
        
        for (let i = 0;i < s.length;i++) {
            
            if ( s[i] === x ) {
                equal++
            } else {
                nEqual++
            }
            
            if (equal === nEqual) {
                s.splice(0,i+1)
                answer++
                break
            } else if (i === s.length-1) {
                s.splice(0,i+1)
                answer++
            }
        }
        
    }
    
    return answer;
}