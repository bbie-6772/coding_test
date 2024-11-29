// 기사단원의 무기

/*
숫자나라 기사단의 각 기사에게는 1번부터 number까지 번호가 지정되어 있습니다.  
기사들은 무기점에서 무기를 구매하려고 합니다.  
  
각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매하려 합니다.  
단, 이웃나라와의 협약에 의해 공격력의 제한수치를 정하고, 
제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약기관에서 정한 공격력을 가지는 무기를 구매해야 합니다.  
  
무기를 만들 때, 무기의 공격력 1당 1kg의 철이 필요합니다.  
그래서 무기점에서 무기를 모두 만들기 위해 필요한 철의 무게를 미리 계산하려 합니다.  
  
기사단원의 수를 나타내는 정수 number와 
이웃나라와 협약으로 정해진 공격력의 제한수치를 나타내는 정수 limit와 
제한수치를 초과한 기사가 사용할 무기의 공격력을 나타내는 정수 power가 주어졌을 때,  
무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게를 return 하는 solution 함수를 완성하시오.  
*/

function solution(number, limit, power) {
    let answer = 0;
    let weapon = [];

    for (let i = 1; i <= number; i++) {
        // 제곱근 내에서만 약수를 구한 뒤, 약수로 수를 나누면 또다른 약수가 나온다
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                if (!weapon[i - 1]) weapon.push(2)
                else if (i / j === j) weapon[i - 1] += 1;
                else weapon[i - 1] += 2;
            }
            if (weapon[i - 1] > limit) break
        }
    }
    // -1을 해준 이유는 1의 경우 약수가 자신 혼자 뿐임에도 초기값 2가 들어가기 때문
    answer = weapon.reduce((acc, cur) => {
        if (cur > limit) return acc += power
        else return acc += cur
    }, 0) - 1

    return answer;
}

// 다른 코드 분석
function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++) {
        // 하나의 기사(number)마다 초기화
        let count = 0;
        // [N의 제곱근] 대신 [N의 약수 J의 제곱]을 이용해 계산을 보기쉽게 만들었다.
        // [ j <= Math.sprt(n) ] >>> [j * j <= n ]
        for (let j = 1; j * j <= n; j++) {
            // n의 제곱근의 경우 한 번만 카운트하게 설정
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        // answer 에 들어갈 값 계산 후 더하기
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}