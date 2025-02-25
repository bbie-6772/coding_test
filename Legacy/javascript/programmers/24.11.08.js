// 두 수의 차
function sub(num1, num2) {
    let answer = 0;
    answer = num1 - num2;
    return answer;
}
// 두 수의 곱
function mul(num1, num2) {
    let answer = 0;
    answer = num1 * num2
    return answer;
}
// 나눗셈
function div(num1, num2) {
    let answer = 0;
    // 내림을 통해 나눠진 정수만을 표시
    answer = Math.floor(num1 / num2);
    return answer;
}
// 합
function sum(num1, num2) {
    let answer = 0;
    answer = num1 + num2;
    return answer;
}

// 나이 구하기 
function get(age) {
    let answer = 0;
    // 제한사항인 태어난 연도에 1살이기에
    answer = 2023 - age;
    return answer;
}

// 숫자 비교하기
function compare(num1, num2) {
    let answer = 0;
    // 삼항연산자를 이용하여 간략화
    answer = (num1 === num2) ? 1 : -1
    return answer;
}

// 각도 판별기
function type(angle) {
    let answer = 0;

    if (angle < 90) {
        answer = 1;
    } else if (angle === 90) {
        answer = 2;
    } else if (angle < 180) {
        answer = 3;
        //제한 사항의 범위안에선 굳이 추가연산없이 else를 써도 된다
    } else {
        answer = 4;
    }
    return answer;
}

// 짝수의 합
function evensum(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
        // 짝수 = 2로 나눠지는 수 이므로
        if (i % 2 === 0) {
            answer += i;
        }
    }
    return answer;
}

// 배열의 평균값 
function avg1(numbers) {
    let answer = 0;
    let sum = 0;

    numbers.forEach((val, idx) => {
        //마지막 수 확인
        if (idx + 1 === numbers.length) {
            sum += val;
            answer = sum / numbers.length;
        } else {
            sum += val;
        }
    });

    return answer;
}

// 배열의 평균값2 >> 다른방법이 없나 찾다가 reduce 함수를 알게됨
function avg2(arr) {
    let answer = arr.reduce((a, b) => a += b) / arr.length
    return answer;
}

// 짝수 홀수 구분
function evenOdd(num) {
    let answer = (num % 2 === 0) ? "Even" : "Odd";
    return answer;
}

// 자릿수 더하기
function digitsum(n) {
    let answer = 0;
    for (let i = 1; i <= n; i *= 10) {
        // n을 1*i 의 자릿수로 나눠 내림으로 소수를 없애고 1의 자릿수를 구하여 숫자로 더함
        answer += Number(Math.floor(n / i).toString().slice(-1));
    }
    return answer;
}

// 3진법 뒤집기
function solution(n) {
    let answer = 0;
    let trinary = [];

    // toString 을 이용해 (진수) 로 변경
    trinary = n.toString(3)

    for (let i = trinary.length - 1; i >= 0; i--) {
        answer += trinary[i];
    }
    // paresInt를 이용해 (변경할 값,진수명) 10진수로 재변환
    answer = parseInt(answer, 3)
    return answer;
}

