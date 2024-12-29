function solution(clothes) {
    let answer = 0;
    let Obj =  {}
    clothes.forEach((e) => {
        if([e[1]] in Obj) Obj[e[1]]++
        else Obj[e[1]] = 1
    })
    
    answer += Object.values(Obj).reduce((acc, cur, idx, arr) => {
        if(arr.length < 2) return acc + cur
        return acc * (cur + 1)
    },1)

    return answer-1;
}