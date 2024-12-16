function solution(n) {
    var answer = 0;
    let stack = {}
    
    for(let i = 0;i <= n;i++) {
        if (i < 2 ) {
            stack[i] = i
        } else {
            stack[i] = (stack[i-1] + stack[i-2]) % 1234567
        }
    }
    
    answer = stack[n] 
    
    return answer;
}