// 옹알이 (2)

/*
머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다.  
조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 
네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 
같은 발음을 하는 것을 어려워합니다.  
문자열 배열 babbling이 매개변수로 주어질 때,
머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
*/

function solution(babbling) {
    let answer = 0;
    //옹알이 저장
    const word = ["aya", "ye", "woo", "ma"]

    answer = babbling.reduce((acc, cur) => {
        // 값이 옹알이에 있는 것과 같으면 바로 +1 
        if (cur === word.find((val) => val === cur)) return acc + 1
        let double = cur
        for (let i = 0; i < word.length; i++) {
            // replace에서 전역으로 검사하기위해 RegExp 사용
            const w = new RegExp(word[i], "g");
            double = double.replace(w, i)
            // 만약 같은 숫자가 이어질경우 옹알이가 불가능하기에 for을 빠져나옴
            if (double.includes(`${i}${i}`)) break
            // double이 모두 숫자로 채워지면 가능하다는 말이기에 +1 
            if (/^[0-9]*$/.test(double)) return acc + 1
        }
        return acc
    }, 0)

    return answer;
    // 근데 나중에 보니까 replaceAll 이라는 좋은 구문이 있더라
}

// 다른 코드 분석
function solution(babbling) {
    //옹알이를 정규식을 이용해 반복 여부 확인
    const regexp1 = /(aya|ye|woo|ma)\1+/;
    // 정규식을 이용해 단어가 옹알이로 이뤄졌는지 확인
    const regexp2 = /^(aya|ye|woo|ma)+$/;

    return babbling.reduce((ans, word) => (
        // 반복되지 않고 옹알이로 단어가 나눠지면 +1 아닐경우 그대로
        !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
    ), 0);
}

// 숫자 짝꿍
/*
두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
(단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다). 
X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
*/

function solution(X, Y) {
    let answer = [];

    for (let i = 0; i < 10; i++) {
        let xcount = 0;
        let ycount = 0;
        X.replaceAll(i, () => { xcount++ })
        Y.replaceAll(i, () => { ycount++ })
        for (let y = 0; y < Math.min(xcount, ycount); y++) {
            answer.push(i)
        }
    }
    if (answer.length === 0) answer = -1
    else answer = answer.sort((a, b) => +b - +a).join("")
    if (+answer === 0) answer = 0

    return "" + answer
}

// 최적화 실패 버전

function solution(babbling) {
    let answer = '';
    
    answer = X.split("").filter((e) => {
        if (Y.includes(e)) {
            Y = Y.replace(e,"")
            return true
        } else return false
    }).sort((a,b) => +b - +a).join("")
    
    if (answer.length <= 0) answer = -1
    if (+answer === 0) answer = 0
    
    return ""+answer;
}