
// 크기가 작은 부분

/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?  
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다.  
*/

function solution(a, b) {
    let answer = '';
    let day = 0;
    // 요일에 맞게 배열하기 index(1) 1 일 = 금요일
    let week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]

    for (let i = a - 1; i > 0; i--) {
        if (i === 2) {
            day += 29;
        // 월별 패턴을 찾아서 이용 6월 까진 2월을 제외하고 짝수가 30일 홀수가 31일 
        } else if (i % 2 === 0 && i < 7) {
            day += 30;
        // 7월부턴 짝수가 31일 홀수가 30일
        } else if (i % 2 !== 0 && i <= 7) {
            day += 31;
        } else if (i % 2 === 0 && i > 7) {
            day += 31;
        } else {
            day += 30;
        }
    }
    day += b;
    answer = week[day % 7]
    return answer;
}