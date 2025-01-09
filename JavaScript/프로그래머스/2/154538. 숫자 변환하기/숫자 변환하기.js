function solution(x, y, n) {
    if(x===y) return 0
    const visited = new Map()
    visited.set(x, 0)
    const queue = [x]; 
    
    while (queue.length > 0) {  
        const current = queue.shift();
        const level = visited.get(current)
        const comp = [current * 2, current * 3, current + n];
        
        for (const value of comp) {
            if (value === y) return level+1
            if (value < y && !visited.has(value)) {
                visited.set(value, level+1)
                queue.push(value)
            }
        } 
    }  
    
    return -1;
}