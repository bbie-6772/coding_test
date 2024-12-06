function solution(ingredient) {
    let answer = 0;
    let package = [];
    
    for (let i = 0; i < ingredient.length;i++) {
        package.push(ingredient[i])
        if(package.length >= 4) {
            if (
                package[i-3] === 1 &&
                package[i-2] === 2 &&
                package[i-1] === 3 &&
                package[i] === 1
            ){
                package.splice(-4)
                ingredient.splice(i-3,4)
                answer++
                i -= i - 4 ? 4 : i
            }
        }
    }
    return answer
}