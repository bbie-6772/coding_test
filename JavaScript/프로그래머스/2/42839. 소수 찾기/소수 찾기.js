function solution(numbers) {
    let answer = 0;
    const visited = new Set();
    const numbersArr = numbers.split("")
    let stack = [];
    
    function isPrime (number) {
        const prime = +number
        if(prime < 2) return
        for (let i=2;i*i <= prime;i++) {
            if (prime % i === 0) return
        }
        answer++
        return
    }
    
    for (let i=0;i < numbersArr.length;i++) {
        if(!visited.has(+numbersArr[i])) {
            isPrime(+numbersArr[i])
            visited.add(+numbersArr[i])
        }
        stack.push([numbersArr.filter((e, idx) => idx !== i),numbersArr[i]])
    }
    
    while (stack.length > 0) {
        const [left, current] = stack.pop();
        
        for (let j =0;j < left.length;j++) {
            const next = current + left[j]
            if (!visited.has(+next)) {
                visited.add(+next)
                isPrime(next)
            }
            
            const newLeft = left.filter((e,idx) => idx !== j)
            stack.push([newLeft, next])
        }
        
    }
    
    return answer;
}