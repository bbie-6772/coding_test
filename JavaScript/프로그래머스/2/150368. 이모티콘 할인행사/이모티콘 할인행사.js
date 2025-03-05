function solution(users, emoticons) {
    var answer = [0, 0];
    const discounts = [10, 20, 30 ,40];
    // 전체탐색용 배열 생성
    const products = Array.from({length:  discounts.length ** emoticons.length },(__,idx1) => {
        return emoticons.map((cost, idx2) => {
            const rate = discounts[Math.floor(idx1 / (4 ** idx2)) % 4]
            const discountCost = cost * (100 - rate)/100
            return [rate, discountCost]
        })
    })
    
    let maxSubUsers = 0;
    for (const discountedEmoticons of products) {
        let curSubUsers = 0;
        let sales = 0;
        
        for (const [discount, subPoint] of users) {
            const total = discountedEmoticons.reduce((acc, [rate, cost]) => {
                if (discount > rate) return acc
                return acc + cost
            },0)
            
            if (total >= subPoint) curSubUsers++
            else sales += total
        }
        
        if (maxSubUsers < curSubUsers) {
            maxSubUsers = curSubUsers
            answer[0] = curSubUsers
            answer[1] = sales
        } else if ( maxSubUsers === curSubUsers) answer[1] = Math.max(answer[1], sales)
    }
    
    
    return answer;
}