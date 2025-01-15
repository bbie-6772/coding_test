function solution(number, k) {  
    const stack = [];  
    
    for (let digit of number) {  
        // 스택의 마지막 숫자보다 큰 숫자가 들어오면   
        // 제거 횟수가 남아있는 동안 작은 숫자들을 제거  
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {  
            stack.pop();  
            k--;  
        }  
        
        stack.push(digit);  
    }  
    
    // 아직 제거 횟수가 남아있다면 뒤에서 제거  
    while (k > 0) {  
        stack.pop();  
        k--;  
    }  
    
    return stack.join('');  
}  