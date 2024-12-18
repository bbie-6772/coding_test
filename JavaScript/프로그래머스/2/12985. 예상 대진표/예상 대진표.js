function solution(n,a,b) {
    let answer = 0;
    let array = [];
    
    while(a !== b) {
        let temp = [a, b]
        array = []
        for(let i = n;i > 0;i--){
            if (i % 2 === 0) {
                if((i === a || i-1 === a) && a === temp[0])  a = i / 2
                if((i === b || i-1 === b) && b === temp[1]) b = i / 2
                array.push(i / 2)
            }
        }
        n = array.length
        answer++
    }
    
    return answer;
}