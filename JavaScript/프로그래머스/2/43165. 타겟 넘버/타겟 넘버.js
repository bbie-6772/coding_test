function solution(numbers, target) {
    let answer = 0;
    const queue = [[0, 0]]
    const sum = numbers.reduce((acc,cur) => acc += cur)
    
    while (queue.length > 0) {  
        const [index, current] = queue.pop();  

        if (index === numbers.length) {
             if(current === target) answer++  
            continue
        }
        if (current + sum < target || current - sum > target) continue
        
        queue.push([index+1, current - numbers[index]]);
        queue.push([index+1, current + numbers[index]]);  
    }  
    
    return answer
}
