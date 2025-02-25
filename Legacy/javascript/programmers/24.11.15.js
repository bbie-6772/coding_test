
// 크기가 작은 부분
function cutCompareCount(t, p) {
    let answer = 0;
    t = t.split("")
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let Num = "";
        for (let j = i; j < i + p.length; j++) {
            Num += t[j]
            if (Num.length === p.length) {
                (Num <= p) ? answer++ : 0;
            }
        }
    }
    return answer;
}

// 최소 직사각형
function minsRactangle(sizes) {
    let answer = 0;
    let max1 = 0;
    let max2 = 0;
    sizes.forEach((val) => {
        //회전해서 제일 높은 수를 한방향으로 맞추기 (+ 문자열을 숫자로 변환해서 비교)
        val.sort((a, b) => { return Number(a) - Number(b) })
        //제일 큰 명암크기 찾기
        max1 = Math.max(val[0], max1)
        max2 = Math.max(val[1], max2)
    })
    answer = max1 * max2
    return answer;
}

// 시저 암호
function decode(s, n) {
    let answer = '';
    s = s.split("")
    for (let i = 0; i < s.length; i++) {
        let Num = s[i].charCodeAt()
        // ASCII 대문자 65 ~ 90
        // ASCII 소문자 97 ~ 122
        if (Num > 90) {
            s[i] = (Num + n <= 122) ? String.fromCharCode(Num + n) : String.fromCharCode(Num + n - 26)
        } else if (Num >= 65) {
            s[i] = (Num + n <= 90) ? String.fromCharCode(Num + n) : String.fromCharCode(Num + n - 26)
        }
    }
    answer = s.join("")
    return answer;
}

// 숫자 문자열과 영단어
function strToNum(s) {
    let answer = 0;
    while (s.length) {
        let num = s.substr(0, 2)
        // 문자열 변환
        switch (num) {
            case "ze":
                s = s.slice(4)
                answer += "0"
                break;
            case "on":
                s = s.slice(3)
                answer += "1"
                break;
            case "tw":
                s = s.slice(3)
                answer += "2"
                break;
            case "th":
                s = s.slice(5)
                answer += "3"
                break;
            case "fo":
                s = s.slice(4)
                answer += "4"
                break;
            case "fi":
                s = s.slice(4)
                answer += "5"
                break;
            case "si":
                s = s.slice(3)
                answer += "6"
                break;
            case "se":
                s = s.slice(5)
                answer += "7"
                break;
            case "ei":
                s = s.slice(5)
                answer += "8"
                break;
            case "ni":
                s = s.slice(4)
                answer += "9"
                break;
            default:
                answer += s.slice(0, 1)
                s = s.slice(1)
                break;
        }
    }
    return Number(answer);
}
// 다른 코드 분석
function strToNum2(s) {
    //숫자 문자열 배열 생성
    const numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    //받은 문자를 answer에 저장
    let answer = s;

    //numbers 에 있는 문자열들을 한번씩 반복 (i와 변환될 숫자가 동일!)
    for (let i = 0; i < numbers.length; i++) {
        //arr이란 배열에 number[i]를 빼고, 나머지를 갈라서 할당!
        let arr = answer.split(numbers[i]);
        //제외한 곳에 변환될 숫자 i를 삽입하며 할당!
        answer = arr.join(i);
    }

    return Number(answer);
}