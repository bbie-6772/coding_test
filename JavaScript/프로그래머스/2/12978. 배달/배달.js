function solution(N, road, K) {  
    const graph = Array.from({length: N + 1}, () => []);  
    road.forEach(([a,b,hour]) => {  
        graph[a].push([b, hour]);  
        graph[b].push([a, hour]);  
    });  

    const distances = new Array(N + 1).fill(Infinity);  
    distances[1] = 0;  

    const pq = [[1, 0]];  

    while (pq.length > 0) {  
        const [current, currentDist] = pq.shift();  

        for (const [next, hour] of graph[current]) {  
            const newDist = currentDist + hour;  
            if (newDist <= K && newDist < distances[next]) {  
                distances[next] = newDist;  
                pq.push([next, newDist]);  
            }  
        }  
    }  

    return distances.filter(dist => dist <= K).length;  
}  