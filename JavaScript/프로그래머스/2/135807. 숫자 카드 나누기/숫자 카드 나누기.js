function solution(arrayA, arrayB) {
    // 재귀를 통해 최대공약수(GCD) 구하기
    const gcd = (a,b) => (b === 0 ? a : gcd(b, a%b));
    // 배열의 gcd 계산 acc는 초기값(arr[0])임
    const getGCDArray = (arr) => arr.reduce((acc, val) => gcd(acc,val));
    // 최대 공약수 확인
    const gcdA = getGCDArray(arrayA);
    const gcdB = getGCDArray(arrayB);
    // 최대 공약수를 통해 다른 배열 속성과 나눠지는지 확인
    const checkA = arrayB.every((num) => num % gcdA !== 0) ? gcdA : 0;
    const checkB = arrayA.every((num) => num % gcdB !== 0) ? gcdB : 0;
    
    return Math.max(checkA, checkB);
}