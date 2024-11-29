
// 콜라츠 추측 
function collatz(num) {
    let answer = 0;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2;
        } else if (num % 2 === 1) {
            num = num * 3 + 1;
        }
        if (answer < 500) {
            answer++;
        } else {
            answer = -1;
            return answer;
        }
    }
    return answer;
}

// 김서방 찾기
function findKim(seoul) {
    let answer = '';
    answer = "김서방은 " + seoul.indexOf("Kim") + "에 있다"
    return answer;
}

// 나누어 떨어지는 배열
function divIntArray(arr, divisor) {
    let answer = [];
    answer = arr.filter((e) => e % divisor === 0).sort((a, b) => { return a - b });
    answer = answer.length === 0 ? [-1] : answer
    return answer;
}

// 음양 더하기
function signsSum(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        answer += signs[i] ? absolutes[i] : -absolutes[i]
    }
    return answer;
}

// 핸드폰 번호 가리기
function hide(phone_number) {
    let answer = '';
    answer = phone_number.split('').map((v, i) => {
        if (i < phone_number.length - 4) {
            return v = "*";
        } else {
            return v
        }
    }).join('');
    return answer;
}

// 제일 작은 수 제거하기
function cutMin(arr) {
    let answer = [];
    let min;

    min = arr.reduce((a, v) => {
        return Math.min(a, v)
        a = b
    })
    answer = arr.filter((e) => e !== min).length ? arr.filter((e) => e !== min) : [-1]

    return answer;
}