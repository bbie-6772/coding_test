function solution(board) {
    let countO = 0;
    let countX = 0;
    const flatBoard = board.join("")
    
    for (const char of flatBoard) {
        if (char === "O") countO++
        else if (char === "X") countX++
    }
    
    if (countO < countX || countO > countX + 1) return 0
    
    const lines = [  
        [0, 1, 2], // 첫 번째 행  
        [3, 4, 5], // 두 번째 행  
        [6, 7, 8], // 세 번째 행  
        [0, 3, 6], // 첫 번째 열  
        [1, 4, 7], // 두 번째 열  
        [2, 5, 8], // 세 번째 열  
        [0, 4, 8], // 대각선  
        [2, 4, 6], // 대각선  
    ];  
    
    let winO = false;
    let winX = false
    for (const [a, b, c] of lines) {  
        if (flatBoard[a] !== flatBoard[b] || flatBoard[a] !== flatBoard[c] ) continue
        
        if (flatBoard[a] === "O" ) winO = true;
        if (flatBoard[a] === "X" ) winX = true;
    }  
    
    if ((winO && winX)|| 
        (winO && countO !== countX + 1) || 
        (winX && countO !== countX)
    ) return 0
    

    return 1;
}