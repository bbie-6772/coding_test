function solution(fees, records) {
    let answer = [];
    const cars = {}
    
    records.forEach((e) => {
        const [hour, min] = e.split(" ")[0].split(":")
        const time = +hour * 60 + +min
        const number = e.split(" ")[1]
        const isIn = e.split(" ")[2] === "IN" ? true : false
        
        if(!cars[number]) cars[number] = [isIn, time, 0]
        else if (cars[number][0]) {
            cars[number][0] = isIn
            cars[number][2] += +time - +cars[number][1] 
            cars[number][1] = time
        } else {
            cars[number][0] = isIn
            cars[number][1] = time
        }
    })
     
    answer = Object.entries(cars).sort((a,b) => +a[0] - +b[0]).map((cur) => {
        let totalTime = 0;
        if(cur[1][0]) totalTime = cur[1][2] + 1439 - cur[1][1]
        else totalTime = cur[1][2]
        
        if(totalTime <= fees[0] ) return fees[1]
        else {
            return Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3] + fees[1]
        }
    })
    
    
    return answer;
}