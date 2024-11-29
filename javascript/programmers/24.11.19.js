
// 푸드 파이터 대회
function foodPosition(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        if (food[i] % 2 === 0) {
            while (food[i]) {
                let half = (answer.length / 2)
                answer = answer.slice(0, half) + i + answer.slice(half)
                food[i]--
            }
        } else {
            while (food[i] - 1) {
                let half = (answer.length / 2)
                answer = answer.slice(0, half) + i + answer.slice(half)
                food[i]--
            }
        }
    }
    answer = answer.slice(0, (answer.length / 2)) + 0 + answer.slice((answer.length / 2))
    return answer;
}
// 다른 코드 분석
function foodPosition(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        // res에 i를 food[i]의 반절만큼만 반복해서 넣는다 => food[i]는 i번 음식의 수
        res += String(i).repeat(Math.floor(food[i] / 2));
    }
    // res 와 중간고정 0 및 res를 구조분해할당으로 배열로 만들고, reverse 메서드와 join 메서드를 사용하여 반대로 돌린 값을 넣는다.
    return res + '0' + [...res].reverse().join('');
}