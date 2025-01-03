function solution(n, k) {
    function modPow(base, exponent, modulus) {  
        // 모듈러 지수 연산 구현  
        if (modulus === 1n) return 0;  
        let result = 1n;  
        base = base % modulus;  

        while (exponent > 0n) {  
            if (exponent % 2n === 1n) result = (result * base) % modulus;  
            base = (base * base) % modulus;  
            exponent = exponent / 2n;  
        }  
        return result;  
    }  

    // n = 판별할 수, a = 임의의 정수
    function millerRabin(n, a) {  
        // n-1 = 2^s * d 분해  
        let s = 0n;  
        let d = n - 1n;  
        // d가 홀수가 될 때까지 분해
        while (d % 2n === 0) {  
            s++;  
            d /= 2n;  
        }  
        // 초기 계산  
        let x = modPow(a, d, n);  
        // 제곱 단계  
        for (let r = 0n; r < s; r++) {  
            let y = modPow(x, 2n, n);  
            // 비자명적 2차 여현 조건 검사  
            if (y === 1n && x !== 1n && x !== n - 1n) return false;   
            x = y;  
        }  
        // 최종 검사  
        return x === 1n;  
    }  

    function millerRabinTest(n, k = 5) {  
        // 기본 케이스 처리  
        if (n <= 1n || n === 4n) return false;  
        if (n <= 3n) return true;  
        const testBases = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n]
        
        // k번 테스트  
        for (let i = 0; i < k; i++) {  
            // testBases의 길이보다 작거나 같아야 함 
            if (testBases[i] >= n) break;  
            if (!millerRabin(n, testBases[i])) return false;  
        }  

        return true;  
    }  
    
    
    const answer = n.toString(k).split("0").filter((e) => e).reduce((acc, cur, idx, arr) => {
        if(millerRabinTest(BigInt(cur))) return ++acc
        else return acc
    }, 0)
    
    return answer;
}