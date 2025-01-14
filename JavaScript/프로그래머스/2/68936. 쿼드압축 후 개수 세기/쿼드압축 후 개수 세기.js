function solution(arr) {
    let answer = [0,0];
    let stack = [];
    
    function isEqul ([startX, startY], [endX, endY]) {
        const value = arr[startY][startX]
        for (let y = startY;y <= endY;y++) 
            for (let x = startX;x <= endX;x++)
                if (value !== arr[y][x]) {
                    return false
                }
        value === 0 ? answer[0]++ : answer[1]++
        return true
    }

    if(isEqul([0, 0], [arr.length -1, arr.length -1])) 
        return arr[0][0] === 0 ? [1, 0] : [0,1]
    stack.push([[0, 0], [arr.length -1, arr.length -1]])
    
    while (stack.length > 0) {
        const [[startX, startY], [endX, endY]] = stack.pop();
        const midX = Math.floor((startX + endX) / 2);  
        const midY = Math.floor((startY + endY) / 2);  
        if (startX === endX && startY === endY ) {
            arr[startX][startY] === 0 ? answer[0]++ : answer[1]++
            continue
        }
        
        if(!isEqul([startX, startY],[midX, midY])) 
            stack.push([[startX, startY], [midX, midY]])
        
        if(!isEqul([midX + 1 , startY], [endX, midY])) 
            stack.push([[midX + 1 , startY], [endX, midY]])
        
        if(!isEqul([startX, midY + 1 ],[midX, endY])) 
            stack.push([[startX, midY + 1 ],[midX, endY]])
        
        if(!isEqul([midX +1, midY + 1],[endX, endY])) 
            stack.push([[midX +1, midY + 1],[endX, endY]])
    }
    
    return answer;
}