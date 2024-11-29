// 소수 만들기

/*
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.  
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때,
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.
*/
function solution(nums) {
    let answer = 0;
    // 첫번째 수
    for (let i = 0; i < nums.length; i++) {
        // 두번째 수
        for (let j = i + 1; j < nums.length; j++) {
            // 세번째 수 
            for (let k = j + 1; k < nums.length; k++) {
                const number = nums[i] + nums[j] + nums[k]
                // 소수 구하기
                for (let f = 2; f < number; f++) {
                    if (number % f === 0) {
                        break
                    } else if (f === number - 1) {
                        answer++
                    }
                }
            }
        }
    }

    return answer;
}