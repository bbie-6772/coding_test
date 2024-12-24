function solution(elements) {
    var answer = 0;
    const count = new Set()
    const numbers = [];
    let Obj = {0: [...elements]}
    
    elements.forEach(item => count.add(item))
    
    for (let i = 1; i < elements.length;i++) {
        
        Obj[i] = [];
        for (let j = 0; j < elements.length;j++) {
            const front = (j + i) % (elements.length) 
            const temp = Obj[i-1][j] + elements[front]
            
            Obj[i] = [...Obj[i], temp]
        }
        
        Obj[i].forEach(item => count.add(item))
    }
    answer = count.size
    
    return answer;
}