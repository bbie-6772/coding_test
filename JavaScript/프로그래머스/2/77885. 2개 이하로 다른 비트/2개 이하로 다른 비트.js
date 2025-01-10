function solution(numbers) {  
    return numbers.map(num => {  
        const binary = num.toString(2).split('');
        const lastZeroIndex = binary.lastIndexOf('0');
        
        // 경우의 수를 생각해 기본 2진값에 0이 없을 경우
        // 조건을 만족하는 가까운 수를 구함
        // 자신보다 큰 수에서 차이가 1~2개인 숫자 중
        // 작아야 한다면 0이 맨 앞 다음 수로 올 경우임
        if (lastZeroIndex === -1) binary.splice(1, 0, '0');
        // 0이 있을 경우
        else {
            // 원본의 숫자의 마지막을 가져옴
            const lastIndex = binary.length - 1;
            // 마지막 숫자가 0 일경우 1로 바꿈 => 조건 만족
            if (lastIndex === lastZeroIndex) binary[lastZeroIndex] = '1';
            // 0이 마지막 숫자가 아닐 경우 0을 1로 바꾸고 그 다음 수를 0으로 바꾸면 조건을 만족함
            else [binary[lastZeroIndex], binary[lastZeroIndex + 1]] = [1, 0]
        }

        // 수정한 binary를 숫자로 반환
        return parseInt(binary.join(''), 2);
    });  
}  

