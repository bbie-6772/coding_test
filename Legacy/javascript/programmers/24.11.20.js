
// 콜라 문제 - 2개를 가져다주면 콜라 1병을 주는 마트 / 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가
function cola(a, b, n) {
    let answer = 0;
    while (n >= a) {
        let coke = Math.floor(n / a) * b;
        answer += coke
        n = coke + n % a
    }
    return answer;
}