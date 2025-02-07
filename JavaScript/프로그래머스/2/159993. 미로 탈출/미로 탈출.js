function solution(maps) {
    var answer = 0;
    const queue = [];
    const direct = [[0,1],[0,-1],[1,0],[-1,0]]
    const visited1 = new Set();
    const visited2 = new Set();
    
    // 시작지점 찾기
    maps.find((e, y) => {
        const x = e.indexOf('S')
        if( x !== -1 ) {
            queue.push([[x, y] , 0, false])
            visited1.add(`${x},${y}`)
            return true
        }
    })
    
    // bfs 탐색 시작  시작위치 / 이동 시간 / 레버 여부
    while(queue.length > 0) {
        const [position , time, lever] = queue.shift()
        
        // 성공 조건
        if (lever && maps[position[1]][position[0]] === "E")
            return time
        
        // 4 방향 이동
        for (const [directX, directY] of direct ) {
            const x = position[0] + directX
            const y = position[1] + directY
            const next = maps[y] ? maps[y][x] : null
            if (!next || next === "X") continue
            if (lever) {
                if (!visited2.has(`${x},${y}`)) {
                    queue.push([[x,y],time+1,lever])
                    visited2.add(`${x},${y}`)
                }
            } else if (!visited1.has(`${x},${y}`)) {
                if (next === 'L') {
                    queue.push([[x,y],time+1,true])
                    visited2.add(`${x},${y}`)
                } else {
                    queue.push([[x,y],time+1,lever])
                    visited1.add(`${x},${y}`)
                }
            }
        }
    }
    // 이동을 하지못할 때
    return -1;
}