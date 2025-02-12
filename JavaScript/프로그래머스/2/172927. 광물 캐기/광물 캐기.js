function solution(picks, minerals) {
    // 곡괭이와 피로도 관계 테이블
    const fatigueTable = {  
        diamond: [1, 5, 25],  
        iron: [1, 1, 5],  
        stone: [1, 1, 1]  
    }; 
    
    let totalPicks = picks.reduce((acc, cur) => acc + cur * 5, 0)
    
    // 미네랄 그룹 생성(= 곡괭이는 무조건 5단위로 사용하기에)
    const mineralGroups = [];
    for (let i = 0; i < minerals.length;i += 5) {
        const group = minerals.slice(i, i+5)
        totalPicks -= 5
        if(totalPicks >= 0) {
            mineralGroups.push(group);    
        }
    }
    
    // 그룹의 피로도를 내림차순으로 정렬
    mineralGroups.sort((a,b) => {
        // 돌 곡괭이 기준으로 값 계산
        const SumA = a.reduce((acc, mineral) => acc + fatigueTable[mineral][2],0)
        const SumB = b.reduce((acc, mineral) => acc + fatigueTable[mineral][2],0)
        return SumB - SumA;
    })
    
    let totalFatigue = 0;
    // 정렬된 순서대로 강한 곡괭이 순으로 사용 
    for (const minerals of mineralGroups) {
        if (picks[0] > 0) {
            totalFatigue += minerals.length;
            picks[0]--;
        } else if (picks[1] > 0) {
            totalFatigue += minerals.reduce((acc, mineral) => acc + fatigueTable[mineral][1],0)
            picks[1]--;
        } else if (picks[2] > 0) {
            totalFatigue += minerals.reduce((acc, mineral) => acc + fatigueTable[mineral][2],0)
            picks[2]--;
        // 곡괭이를 전부 사용했을 때
        } else {
            break;
        }
    }
    
    return totalFatigue
}