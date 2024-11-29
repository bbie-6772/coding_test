
// 약수의 합
function sumMeasure(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

// 나머지가 1이되는 수 찾기
function remainOne(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 1) {
            answer = i;
            break
        }
    }
    return answer;
}

// x만큼 간격이 있는 n개의 숫자
function intervalNum(x, n) {
    let answer = [];
    let sum = x;
    while (answer.length !== n) {
        answer.push(sum);
        sum += x;
    }
    return answer;
}

// 자연수 뒤집어 문자열 만들기
function separator(n) {
    let answer = [];
    //문자열 변환
    n += ""
    n = n.split("")
    for (let i = n.length - 1; i > -1; i--) {
        answer.push(Number(n[i]));
    }
    return answer;
}

// 문자열을 정수로
function toNum(s) {
    let answer = 0;
    answer += Number(s);
    return answer;
}

// 정수 제곱근 판별
function isSqrtInt(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (i * i === n) {
            //** 은 제곱 연산자
            answer = (i + 1) ** 2
            break;
        } else if (i === n) {
            answer = -1;
            break;
        }
    }
    return answer;
}

// 정수 내림차순 배치
function sortInt(n) {
    let answer = 0;
    //return 으로 비교할 a b 수가 양수 일 경우 위로 음수일경우 내려가게 만들어 내림차순 정렬
    n = (n + "").split("").sort((a, b) => { return b - a });
    console.log(n)
    answer = Number(n.join(''));
    return answer;
}