// 로또의 최고 순위와 최저 순위

/*
민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다.
이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
*/

function solution(lottos, win_nums) {
    let answer = [];
    // rank가 1일 경우 6등이 되면서 순차적으로 등수가 올라가게 설계
    const rank = [6, 6, 5, 4, 3, 2, 1]
    let nums

    nums = lottos.filter((val) => win_nums.includes(val))
    lottos = lottos.filter((val) => val === 0)

    answer.push(rank[nums.length + lottos.length])
    answer.push(rank[nums.length])

    return answer;
}