function solution(sequence, k) {
    let start = 0;
    let sum = 0;
    let minLength = Infinity;
    let answer = [];
    
   for (let end = 0; end < sequence.length; end++) {  
        sum += sequence[end];  

        // 합이 k 를 넘으면 먼저들어간 숫자들을 순차적으로 제외
        while (sum > k && start <= end) {  
            sum -= sequence[start];  
            start++;  
        }  

        // k에 도달하면 최소 길이인지 확인 후 응답 처리
        if (sum === k) {  
            if (minLength > end - start + 1) {  
                minLength = end - start + 1;  
                answer = [start, end];  
            }  
        }  
    }  
    
    return answer;
}