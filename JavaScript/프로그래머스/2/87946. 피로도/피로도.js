function solution(k, dungeons) {
    let num = []
    let number = 0;
    let temp = k;
    
    dungeons.sort((a,b) => b[0]/b[1] - a[0]/a[1] || a[1] - b[1])
    for (let i = 0; i < dungeons.length;i++) {
        if (temp >= dungeons[i][0]) {
            temp -= dungeons[i][1]
            number++
        }
        if (temp <= 0) break
    }
    num.push(number)
    number = 0
    temp = k
    
    dungeons.sort((a,b) => a[1] - b[1] || b[0] - a[0] )
    for (let i = 0; i < dungeons.length;i++) {
        if (temp >= dungeons[i][0]) {
            temp -= dungeons[i][1]
            number++
        }
        if (temp <= 0) break
    }
    num.push(number)
    number = 0
    temp = k

    dungeons.sort((a,b) => b[0] - a[0] || a[1] - b[1])
    for (let i = 0; i < dungeons.length;i++) {
        if (temp >= dungeons[i][0]) {
            temp -= dungeons[i][1]
            number++
        }
        if (temp <= 0) break
    }
    num.push(number)
    number = 0
    temp = k
    
    return Math.max(...num);
}