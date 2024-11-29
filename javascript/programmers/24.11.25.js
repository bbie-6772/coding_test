// 카드 뭉치

/*
문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때,  
cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를,  
만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.
*/

function solution(cards1, cards2, goal) {
    while (goal.length > 0) {
        // 똑같은 문자가 있으면 goal을 순차적으로 지워서 없어지면 Yes 
        if (goal[0] === cards1[0]) {
            goal = goal.splice(1)
            cards1 = cards1.splice(1)
        } else if (goal[0] === cards2[0]) {
            goal = goal.splice(1)
            cards2 = cards2.splice(1)
        // 문자가 지워지지 않으면 NO 
        } else return "No"
    }
    return "Yes"
}

// 과일장수

/*
과일 장수가 사과 상자를 포장하고 있습니다.  
사과는 상태에 따라 1점부터 k점까지의 점수로 분류하며, 
k점이 최상품의 사과이고 1점이 최하품의 사과입니다.  
사과 한 상자의 가격은 다음과 같이 결정됩니다.  
  
한 상자에 사과를 m개씩 담아 포장합니다.  
상자에 담긴 사과 중 가장 낮은 점수가 p (1 ≤ p ≤ k)점인 경우, 사과 한 상자의 가격은 p * m 입니다.  
과일 장수가 가능한 많은 사과를 팔았을 때, 얻을 수 있는 최대 이익을 계산하고자 합니다.  
(사과는 상자 단위로만 판매하며, 남는 사과는 버립니다)  
  
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.
*/

function solution(k, m, score) {
    var answer = 0;
    let box = [];

    score.sort((a, b) => +b - +a)

    for (let i = 0; i < score.length + 1; i++) {
        if (box.length < m) {
            box.push(score[i])
        } else {
            answer += Math.min(...box) * m
            box = [];
            box.push(score[i])
        }
    }
    return answer;
}

// 모의고사

/*
1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때,  
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

패턴
1번 1 2 3 4 5
2번 2 1 2 3 2 4 2 5 
3번 3 3 1 1 2 2 4 4 5 5
*/

function solution(answers) {
    let answer = [];
    let tester = [0, 0, 0];
    let best = 0;

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === (i) % 5 + 1) tester[0]++

        if (i % 2 === 0 && answers[i] === 2) tester[1]++
        else if (answers[i] === i % 8 && i % 8 <= 3) tester[1]++
        else if (answers[i] === 4 && i % 8 === 5) tester[1]++
        else if (answers[i] === 5 && i % 8 === 7) tester[1]++

        if (answers[i] === 3 && i % 10 < 2) tester[2]++
        else if (answers[i] === 1 && i % 10 < 4 && i % 10 >= 2) tester[2]++
        else if (answers[i] === 2 && i % 10 < 6 && i % 10 >= 4) tester[2]++
        else if (answers[i] === 4 && i % 10 < 8 && i % 10 >= 6) tester[2]++
        else if (answers[i] === 5 && i % 10 < 10 && i % 10 >= 8) tester[2]++
    }
    best = Math.max(...tester)

    tester.forEach((val, idx) => {
        if (best === val) answer.push(idx + 1)
    })

    return answer;
}
// 다른코드 분석
function solution(answers) {
    var answer = [];
    // 패턴을 배열로 저장
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    // 패턴을 이용해 filter로 정답문제를 저장 [i % a1.length]로 배열 순환
    var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
    var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
    var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
    // 가장 답을 많이 맞춘 사람 찾기
    var max = Math.max(a1c, a2c, a3c);

    // 동시 최대 정답자도 가능하지만 순서대로 나와야하기 때문에 1 2 3 순으로 배치
    if (a1c === max) { answer.push(1) };
    if (a2c === max) { answer.push(2) };
    if (a3c === max) { answer.push(3) };

    return answer;
}