function solution(sizes) {
    let answer = 0;
    let max1 = 0;
    let max2 = 0;
    sizes.forEach((val) => {
        //회전해서 제일 높은 수를 한방향으로 맞추기
        val.sort((a,b) => {return Number(a)-Number(b)})
        //제일 큰 명암크기 찾기
        max1 = Math.max(val[0],max1)
        max2 = Math.max(val[1],max2)
    })
    answer = max1 * max2
    return answer;
}