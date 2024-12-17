function solution(brown, yellow) {
    var answer = [];
    let width = 0;
    let length = 0;
    
    
    for (let i = 1;i <= yellow;i++) {
        width = i
        if (yellow % i === 0) length = yellow / i
        if ((brown - 4)/2 - width === length ) break
    }

    return [length+2, width+2];
}