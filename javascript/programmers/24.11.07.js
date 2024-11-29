// 최대 공약수와 공배수를 찾는 알고리즘
function solution(n, m) {
    
    //최대 공약수 = 둘을 동시에 나눴을 떄 가장 큰 수
    let prime_result = 0;
    //배수 계산 시 최댓값 선정 = 두 값의 곱
    let mul_n = [];
    let mul_m = [];
    // 공배수
    let equal_multiple = [];
    // 답 제출
    let answer = [];
    // 더 작은 수 구하기
    let min = Math.min(n, m);

    // 작은 수를 기준으로 둘을 나눴을 때 가장 높은 값 찾기
    for (let i = 1; i <= min; i++) {
        if (n % i === 0 && m % i === 0) { prime_result = i };
    }

    // 최대 공약수 제출
    answer.push(prime_result);

    //두 수를 곱한 수 이하에서 배수 찾기
    for (let j = 1; j <= m; j++) {
        mul_n.push(n * j)
    }
    for (let j2 = 1; j2 <= n; j2++) {
        mul_m.push(m * j2)
    }

    //공배수 배열들의 교집합 구하기
    equal_multiple = mul_n.filter(x => mul_m.includes(x));

    // 구조분해할당으로 문자를 숫자로 인식시켜 최대 공배수 제출
    answer.push(Math.min(...equal_multiple));

    return answer;
}
