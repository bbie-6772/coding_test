// 명예의 전당

/*
"명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 
시청자들의 문자 투표수로 가수에게 점수를 부여합니다.  

매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.  
즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다.  

k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 
출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.  
  
명예의 전당 목록의 점수의 개수 k,
1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때,
매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.
*/

function solution(k, score) {
    let answer = [];
    let award = [];

    for (let i = 0; i < score.length; i++) {
        award.push(score[i])
        if (award.length > k) {
            award.sort((a, b) => +b - +a)
            award.pop()
        }
        answer.push(Math.min(...award))
    }
    return answer;
}