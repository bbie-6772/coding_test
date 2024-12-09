function solution(wallpaper) {
    var answer = [];
    let point1 = [wallpaper.length, wallpaper[0].length];
    let point2 = [0, 0];
    
    wallpaper.forEach((val, idx) => {
        point1[0] = val.includes("#") && point1[0] > idx ? idx : point1[0]
        point1[1] = val.indexOf("#") < point1[1] && val.indexOf("#") > -1 ? val.indexOf("#") : point1[1]
        point2[0] = val.includes("#") && point2[0] < idx+1 ? idx+1 : point2[0]
        point2[1] = val.lastIndexOf("#")+1 > point2[1] && val.lastIndexOf("#") > -1 ? val.lastIndexOf("#") + 1 : point2[1]
    })
    
    return answer = [...point1,...point2];
}