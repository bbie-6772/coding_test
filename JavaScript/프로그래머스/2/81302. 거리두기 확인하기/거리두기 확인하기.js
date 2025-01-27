function solution(places) {
    var answer = [];

    // [1] 대기실 확인하기
    for (const room of places) {
        const participants = []
        const tables = []
        // [2] 사회적 거리두기가 안지켜졌는가 확인
        // [2-1] 사람과 테이블 찾기
        for (let i = 0;i < room.length;i++) {
            room[i].split("").forEach((e, idx) => {
                if (e === "P") participants.push([i, idx])
                if (e === "O") tables.push([i, idx])
            })
        }
        // 거리두기 확인
        let socialDist = false;
        for (let i = 0; i < participants.length; i++) {
            for (let j = i + 1; j < participants.length; j++) { 
                const [x1, y1] = participants[i];  
                const [x2, y2] = participants[j]; 
                const distance =  Math.abs(x1 - x2) + Math.abs(y1 - y2)
                
                // 맨해튼 거리 판정
                if (distance === 1) {
                    socialDist = true 
                    break;
                } else if (distance === 2) {
                    if ( x1 === x2) {
                        const midY = (y1 + y2) / 2;
                        if (tables.some(table => table[0] === x1 && table[1] === midY)) {
                            socialDist = true
                            break
                        }
                    } else if (y1 === y2) {
                        const midX = (x1 + x2) / 2;
                        if (tables.some(table => table[0] === midX && table[1] === y1)) {
                            socialDist = true
                            break
                        }
                    } else {
                        if (tables.some(table =>   
                            (table[0] === x1 && table[1] === y2) ||   
                            (table[0] === x2 && table[1] === y1)  
                        )) {  
                            socialDist = true;  
                            break; 
                        }  
                    }
                }
            }
            if (socialDist) break;
        }
        answer.push(socialDist ? 0 : 1)
    }
    return answer;
}