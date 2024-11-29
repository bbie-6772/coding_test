
// 없는 숫자 더하기
function nullNumSum(numbers) {
    let answer = (9 + 1) * 9 / 2;
    numbers.forEach((val, inx) => {
        answer -= val
    })
    return answer;
}

// 가운데 숫자 가져오기
function middleNum(s) {
    let answer = '';
    if (s.length % 2 === 0) {
        answer = s.substr(s.length / 2 - 1, 2)
    } else {
        answer = s.substr(Math.floor(s.length / 2), 1)
    }
    return answer;
}

// 패턴 반복 "수박수박수.."
function pattern(n) {
    let answer = '';
    while (answer.length !== n) {
        if (answer.length % 2 === 0) {
            answer += "수"
        } else {
            answer += "박"
        }
    }
    return answer;
}

// 내적
function dotProduct(a, b) {
    let answer = a.reduce((acc, val, idx) => acc + val * b[idx], 0)
    return answer;
}

// 약수의 개수와 덧셈
function measureSumEvenSubOdd(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            (i % j === 0) ? sum++ : 0;
            if (i === j) {
                if (sum % 2 === 0) {
                    answer += i
                } else {
                    answer -= i
                }
            }
        }
    }
    return answer;
}

// 문자열 내림차순 배치
function sortDESC(s) {
    let answer = '';
    answer = s.split("").sort((a, b) => a < b ? 1 : -1).join("")
    return answer;
}

// 부족한 금액 계산하기
function balance(price, money, count) {
    let answer = 0;
    for (let i = 1; i <= count; i++) {
        money -= price * i
    }
    answer = (money < 0) ? Math.abs(money) : 0
    return answer;
}