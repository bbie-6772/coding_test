function solution(data, col, row_begin, row_end) {
    let answer = 0;
    const numbers = [];
    
    // [1] 튜플 정렬하기
    data.sort((a, b) => {
        const sort = a[col-1] - b[col-1]
        if (sort === 0) return b[0] - a[0]
        return sort
    })
    // [2] row start~end 까지의 나머지 값 합 구하기
    for(let i=row_begin-1;i <= row_end-1;i++) {
        const number = data[i].reduce((acc,cur) => acc += cur % (i+1),0)
        numbers.push(number)
    }
    // [3] bitwise XOR 을 이용해 최종값 획득하기
    // [3-1] 순서대로 XOR을 하는게 맞겠지?
    numbers.forEach((num) => {
        answer = answer ^ num
    })
    
    return answer;
}