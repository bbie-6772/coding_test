function solution(order) {
    let answer = 0;
    let max = 0;
    let stack = [];
    
    for (let i=0;i < order.length;i++) { 
        if(order[i] > max) {
            for (let j = max + 1;j < order[i];j++) stack.push(j)
            max = order[i]
            answer++
        } else if (order[i] === stack[stack.length-1]){
            stack.pop()
            answer++
        } else break 
    }
    
    return answer;
}