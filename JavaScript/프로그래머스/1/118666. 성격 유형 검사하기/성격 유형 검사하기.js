function solution(survey, choices) {
    let answer = '';
    let answerObj = {R: 0,T: 0,C: 0,F: 0, J: 0,M: 0,A: 0,N: 0}
    
    for (let i = 0;i < survey.length;i++) {
        const category = survey[i].substr(0,1)
        switch (choices[i]) {
            case 1:
                answerObj[category] += 3
                break                
            case 2:
                answerObj[category] += 2
                break
            case 3:
                answerObj[category] += 1
                break
            case 4:
                break
            case 5:
                answerObj[category] -= 1
                break
            case 6:
                answerObj[category] -= 2
                break
            case 7:
                answerObj[category] -= 3
                break
        }
    }
    
    if (answerObj.R < answerObj.T) {
        answer += "T"
    } else {
        answer += "R"
    }
    if (answerObj.C < answerObj.F) {
        answer += "F"
    } else {
        answer += "C"
    }
    if (answerObj.J < answerObj.M) {
        answer += "M"
    } else {
        answer += "J"
    }
    if (answerObj.A < answerObj.N) {
        answer += "N"
    } else {
        answer += "A"
    }
    
    return answer;
}