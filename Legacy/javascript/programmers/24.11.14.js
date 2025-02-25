
// 문자열 다루기
function validate(s) {
    let answer;
    if (s.length === 4 || s.length === 6) {
        answer = (Number(s)) ? true : false;
    }
    return answer;
}

// 행렬의 덧셈
function sumArray(arr1, arr2) {
    let answer = [[]];

    arr1.forEach((val, idx) => {
        for (let i = 0; i < val.length; i++) {
            (answer.length < idx + 1) ? answer.push([]) : 0;
            answer[idx].push(val[i] + arr2[idx][i])
        }
    })
    return answer;
}

// 직사각형 별찍기
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let array = [];
    let loop = 0;
    for (let i = 0; i < a; i++) {
        array.push("*")
    }
    while (b > loop) {
        console.log(array.join(""));
        loop++
    }
});

// 이상한 문자 만들기
function strangeStr(s) {
    let array = [];
    let answer = "";
    let spc = 0;
    array = s.split("")
    for (let i = 0; i < array.length; i++) {
        (array[i] === " ") ? spc = i - 1 : 0;
        if ((i - spc) % 2 === 0) {
            answer += array[i].toUpperCase();
        } else {
            answer += array[i].toLowerCase();
        }
    }
    return answer;
}

// 삼총사
function equalZeroCount(number) {
    let answer = 0;
    // 첫번째 숫자 
    number.forEach((val1, idx1) => {
        // 두번째 숫자
        number.forEach((val2, idx2) => {
            // 세번째 숫자 (안겹칠 때)
            if (idx1 !== idx2) {
                for (let i = 0; i < number.length; i++) {
                    if (val1 + val2 + number[i] === 0 && idx1 !== i && idx2 !== i) {
                        answer++;
                    }
                }
            }
        })
    })
    return answer / 6;
}