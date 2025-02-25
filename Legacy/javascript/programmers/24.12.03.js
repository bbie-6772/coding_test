// 체육복

/*
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는  
학생이 이들에게 체육복을  빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로  
앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을  빌려줄 수 있습니다. 예를 들어, 4번  
학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.  체육복이 없으면 수업을  
들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다  


전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost,  
여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,  
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n, lost, reserve) {
    let answer = 0;

    answer += n - lost.length

    // 중복값 확인 및 삭제 + 정렬
    lost = lost.filter((e) => {
        if (reserve.includes(e)) {
            reserve.splice(reserve.indexOf(e), 1)

            answer++
            return false
        }
        return true
    }).sort()
    // 정렬
    reserve.sort()

    for (let i = 0; i < reserve.length; i++) {
        const low = lost.indexOf(reserve[i] - 1)
        const high = lost.indexOf(reserve[i] + 1)
        let recive = 0;
        if (low >= 0) recive = lost.splice(low, 1)
        else if (!recive && high >= 0) recive = lost.splice(high, 1)

        if (recive) answer++
        if (lost.length <= 0) break
    }
    return answer;
}

// 다른 코드 분석

function solution(n, lost, reserve) {
    const students = {};
    let answer = 0;
    // 학생 배열 생성(+ 정렬효과)
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }
    // 도난 / 여벌 학생 일괄 할당
    lost.forEach(number => students[number] -= 1);
    reserve.forEach(number => students[number] += 1);

    // 학생 마다 판정
    for (let i = 1; i <= n; i++) {
        // 여벌 학생과 도난 학생이 -1 관계일 때
        if (students[i] === 2 && students[i - 1] === 0) {
            students[i - 1]++;
            students[i]--;
            // 여벌 학생과 도난 학생이 +1 관계일 때
        } else if (students[i] === 2 && students[i + 1] === 0) {
            students[i + 1]++;
            students[i]--;
        }
        // 분배 완료
    }
    // 체육복이 1개 이상인 학생들만 확인
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        }
    }
    return answer;
}