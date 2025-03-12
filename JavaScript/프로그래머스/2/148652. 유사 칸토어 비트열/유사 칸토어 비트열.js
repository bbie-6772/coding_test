function solution(n, l, r) {  
    function countOnes(start, end, depth) {  
        if (depth === 0) return end - start + 1;  
        const blockSize = Math.pow(5, depth - 1);  
        let count = 0;  
        // 블록 사이즈에서 범위 확인
        for (let i = Math.floor(start / blockSize); i <= Math.floor(end / blockSize); i++) {  
            // 중앙 값일 경우 건너뜀
            if (i === 2) continue;  
            // 다음 블록 사이즈의 위치를 생성 후 재귀
            const newStart = Math.max(start, i * blockSize) % blockSize;  
            const newEnd = Math.min(end, (i + 1) * blockSize - 1) % blockSize;  
            count += countOnes(newStart, newEnd, depth - 1);  
        }  
        return count;  
    }  

    return countOnes(l - 1, r - 1, n);  
} 