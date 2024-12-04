function solution(keymap, targets) {
    var answer = [];
    
    for (let str of targets) {
        let total_count = 0;
        // 문자당 누름 횟수 찾기
        for (let i = 0;i < str.length;i++) {
            let count = 0;
            const x = str[i]
            // 문자 최소로 찾기
            for (let j = 0;j < keymap.length;j++) {
                if (!keymap[j].includes(x)) continue
                if (count <= 0) count = keymap[j].indexOf(x)+1
                else count = Math.min(count,keymap[j].indexOf(x)+1)
            }
            // 없을 경우 나가기
            if (count === 0) {
                answer.push(-1)
                total_count = ""
                break
            }
            // 한 글자에 필요한 누름 횟수를 총 누름 횟수에 더하기
            total_count += count 
        }
        if (total_count > 0 ) {
            answer.push(total_count)
        }
    }
    
    return answer;
}