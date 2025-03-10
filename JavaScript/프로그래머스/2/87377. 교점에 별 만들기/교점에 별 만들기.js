function solution(line) {
    var answer = [];
    const point = new Set();
    // x 시작점(최솟값) -> x 마지막점(최댓값)
    // y 시작점(최댓값) -> y 마지막점(최솟값)
    const posX = [Infinity ,-Infinity]
    const posY = [-Infinity,Infinity]
    for (let i = 0;i < line.length;i++) {
        const [x1, y1, z1] = line[i];
        for ( let j = i+1;j < line.length;j++) {
            const [x2, y2, z2] = line[j];
                const y = ((x1 * -z2) - (x2 * -z1)) / ((x1 * y2) - (x2 * y1))
                if (!Number.isInteger(y)) continue
                const x = ((y2 * -z1) - (y1 * -z2)) / ((x1 * y2) - (x2 * y1))
                if (Number.isInteger(x)) {
                    point.add(`${x},${y}`)
                    if (posX[0] > x) posX[0] = x
                    if (posX[1] < x) posX[1] = x
                    if (posY[0] < y) posY[0] = y
                    if (posY[1] > y) posY[1] = y
                }
        }
    }
    
    for (let y = posY[0]; y >= posY[1];y--) {
        let grid = "";
        for (let x = posX[0]; x <= posX[1];x++) {
            if(point.has(`${x},${y}`)) grid += "*"
            else grid += "."
        }
        answer.push(grid)
    }
    
    return answer;
}