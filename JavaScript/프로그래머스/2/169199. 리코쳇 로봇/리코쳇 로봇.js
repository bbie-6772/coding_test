function solution(board) {
    const queue = [];
    const visited = new Set();
    const direct = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const maxLength = [board.length, board[0].length];
    
    let x = 0
    while(x < board.length) {
        for(let y= 0;y < board[x].length;y++) {
            if (board[x][y] === "R") {
                queue.push([[x,y], 0])
                visited.add(`${x},${y}`)
                break;
            }
        }
        x++
    }
    
    while(queue.length > 0) {
        const [ [x,y], count ] = queue.shift();
        
        if(board[x][y] === "G") return count
        
        for (let i=0;i < direct.length;i++) {
            let newX = x;
            let newY = y;
            
            while(true) {
                newX = newX + direct[i][0]
                newY = newY + direct[i][1]
                if (newX >= maxLength[0] || newY >= maxLength[1] || newX < 0 || newY < 0) {
                    newX = newX - direct[i][0]
                    newY = newY - direct[i][1]
                    break
                } else if(board[newX][newY] === "D") {
                    newX = newX - direct[i][0]
                    newY = newY - direct[i][1]
                    break
                }
            }
            
            if(!visited.has(`${newX},${newY}`)) {
                queue.push([[newX,newY], count + 1])
                visited.add(`${newX},${newY}`)
            }
        }
    }

    return -1;
}