function solution(storey) {
    const numbers = String(storey).split("")
    
    const minCost = (index, ceil) => {
        if(index < 0) return ceil ? 1 : 0
        
        const current = +numbers[index] + (ceil ? 1 : 0)
        const downCost = current
        const upCost = 10 - current
        
        if (current < 5) {
            return downCost + minCost(index - 1, false);
        } else if (current > 5) {
            return upCost + minCost(index - 1, true);
        } else {
            return Math.min(downCost + minCost(index - 1, false),
                            upCost + minCost(index - 1, true))
        }
    }
    
    return minCost(numbers.length -1, false);
}