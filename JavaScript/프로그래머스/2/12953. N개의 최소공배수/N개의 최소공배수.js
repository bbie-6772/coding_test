function solution(arr) {
    let answer = 1;
    
    arr.sort((a,b) => b - a)
    
    let i = arr[arr.length-1]
    answer = arr[0]
    
    while (arr.some((e) => answer % e !== 0)) {
        answer = arr[0] * i
        i++
    }
    
    return answer;
}