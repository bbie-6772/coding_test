function solution(book_time) {
    var answer = 0;
    let rooms = []
    
    book_time.sort((a,b) => { 
        const [startHourA, startMinuteA] = a[0].split(":");
        const startTimeA = +startHourA * 60 + +startMinuteA
        const [startHourB, startMinuteB] = b[0].split(":");
        const startTimeB = +startHourB * 60 + +startMinuteB
        return startTimeA - startTimeB
    })
    
    for(let i = 0; i < book_time.length;i++) {
        const [startHour, startMinute] = book_time[i][0].split(":");
        const [endHour, endMinute] = book_time[i][1].split(":");
        const startTime = +startHour * 60 + +startMinute
        const endTime = +endHour * 60 + +endMinute
        
        const roomIdx = rooms.findIndex((end) => end + 10 <= startTime)
        if (roomIdx !== -1) {
            rooms[roomIdx] = endTime
        } else rooms.push(endTime)
    }
    
    
    return rooms.length;
}