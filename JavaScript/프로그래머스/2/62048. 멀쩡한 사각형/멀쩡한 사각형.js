function solution(w, h) {
    //[1] 총 정사각형 확인
    const totalSquare = w * h;
    //[2] 최대 공약수 구하기(유클리드 알고리즘)
    let [a ,b] = [w, h]
    while(b !== 0) {
        let temp = a % b;
        a = b;
        b = temp;
    }
    const gcd = a
    //[3] 대각선이 지나가는 정사각형 갯수 구하기
    //[3-1] gcd(최대 공약수) 는 대각선에서 겹쳐지는 부분을 제외하기 위함임
    const ignoreSquare = w + h - gcd
    //[4] 출력
    return totalSquare - ignoreSquare
}