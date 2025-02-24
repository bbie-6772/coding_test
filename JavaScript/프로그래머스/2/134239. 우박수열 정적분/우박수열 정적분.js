function solution(k, ranges) {
    const answer = [];
    const points = [[0,k]];
    const extents = [];
    
    let i = 1
    while(k !== 1) {
        if(k % 2 === 0) {
            k = k / 2
        } else {
            k = k * 3 + 1
        }
        const [x,y] = points[i-1]
        const maxN = Math.max(k,y)
        const extent = maxN - Math.abs(k - y)/2
        
        extents.push(extent)
        points.push([i,k])
        i++
    }
    
    for (const [start, minus] of ranges) {
        const end = extents.length + minus
        if(start > end) answer.push(-1)
        else {
            let total = 0;
            for(let i = start;i < end;i++) {
                total += extents[i]
            }
            answer.push(total)
        }
    }
    
    return answer;
}