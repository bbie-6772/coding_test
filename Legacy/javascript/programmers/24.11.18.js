
// 문자열 내 맘대로 정렬
function sortToNNum(strings, n) {
    let answer = [];
    answer = strings.sort((a, b) => { return (a.substr(n, 1) + a).localeCompare(b.substr(n, 1) + b) })
    return answer;
}

// K번째 수
function cutSortFind(array, commands) {
    const answer = [];
    for (const element of commands) {
        const cutting = array.slice(element[0] - 1, element[1]).sort((a, b) => Number(a) - Number(b))
        answer.push(cutting[element[2] - 1])
    }
    return answer;
}

// 두 개 뽑아서 더하기
function totalSumType(numbers) {
    let answer = [];

    numbers.forEach((val, idx) => {
        for (let i = 0; i < numbers.length; i++) {
            if (i !== idx) {
                const num = val + numbers[i];
                answer.includes(num) ? 0 : answer.push(num)
            }
        }
    })
    return answer.sort((a, b) => Number(a) - Number(b));
}

// 가장 가까운 같은 글자
function nearEqualStr1(s) {
    const answer = [];
    let array = s.split("");
    array.forEach((val, idx, arr) => {
        for (let i = idx; i >= 0; i--) {
            if (arr.indexOf(val, i) < idx) {
                answer.push(idx - arr.indexOf(val, i))
                break
            } else if (i === 0) {
                answer.push(-1)
            }
        }
    })
    return answer;
}
// 다른코드 분석
function nearEqualStr2(s) {
    const hash = {};
    // 구조 분해 할당으로 배열화
    return [...s].map((v, i) => {
        // hash{}에 key(v)의 값이 지정되지 않았으면 -1을, 있다면 현재 index에서 hash[v]를 뺀 값을 result에 저장
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        // hash{}의 key(v)의 값에 현재 index를 저장
        hash[v] = i;
        return result;
    });
}