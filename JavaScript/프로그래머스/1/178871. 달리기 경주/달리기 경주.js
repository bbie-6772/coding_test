function solution(players, callings) {
    let overlap = 1;
    let order1 = Object.assign(...players.map((e,idx) => {return {[idx]:e}}))
    let order2 = Object.assign(...players.map((e,idx) => {return {[e]:idx}}))
    
    callings.forEach((val) => {  
        const idx = order2[val]
        order1[idx] = order1[idx-1]
        order2[order1[idx-1]] = idx
        
        order1[idx-1] = val
        order2[val] = idx-1
    })
    return Object.entries(order2).sort(([,a],[,b]) => a - b ).map(([k,v]) => k);
}