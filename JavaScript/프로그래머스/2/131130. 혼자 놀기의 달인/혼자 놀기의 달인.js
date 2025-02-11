function solution(cards) {
    var answer = 0;
    const box = [];
    
    // [1] 그룹 상자 갯수 구하기
    const boxCount = (index,counts = new Set()) => {
        const next = cards[index - 1] 
        if (counts.has(index) || next === 0) {
            box.push(counts.size)
            return 
        }
        counts.add(index)
        cards.splice(index-1, 1, 0)
        boxCount(next, counts)
    }
    
    // [2] 그룹 나누기
    let next = 1
    while(cards.length > box.reduce((acc,cur) => acc += cur,0)) {
        boxCount(next)
        next = cards.find((e) => e !== 0)
    }
    
    // [3] 최댓값 구하기
    if(box.length > 1) {
        box.sort((a,b) => +b - +a)
        answer = box[0] * box[1]
    }

    return answer;
}