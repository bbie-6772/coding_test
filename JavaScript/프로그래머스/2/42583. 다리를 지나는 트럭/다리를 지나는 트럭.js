function solution(bridge_length, weight, truck_weights) {
    let i = 0;
    let bridge = {};
    let seconds = 1;
    
    while (i < truck_weights.length) {
        let currentWeight = weight;
        if (Object.keys(bridge).length > 0 ) 
            currentWeight -= Object.keys(bridge).reduce((acc,cur) => acc += truck_weights[cur],0)
        
        if (currentWeight >= truck_weights[i]) {
            bridge[i] = bridge_length
            i++
        }
        
        for (const truck of Object.keys(bridge)) if(--bridge[truck] <= 0) delete bridge[truck]
        seconds++
    }
    
    return seconds + Math.max(...Object.values(bridge));
}