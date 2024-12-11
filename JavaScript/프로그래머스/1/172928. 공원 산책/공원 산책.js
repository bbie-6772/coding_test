function solution(park, routes) {
    let position = [0, 0]
    const parkMap = park.map((e, idx) => {
        return e.split("").map((e2, idx2) => {
            return e2 
        })
    })
    position[0] = parkMap.findIndex((e) => e.includes("S"))
    position[1] = parkMap[position[0]].findIndex((e) => e === "S")
    
    
    for(let i = 0;i < routes.length;i++) {
        let [direction, move] = routes[i].split(" ")
        move = +move
        let isBlock = false
        
        switch (direction) {
            case "N":
                if((position[0] - move) >= 0) {
                    for (let i = position[0];i >= position[0] - move;i--) {
                        if(parkMap[i][position[1]] === "X") {
                            isBlock = true 
                            break
                        }
                    }
                    if (!isBlock) position[0] = position[0] - move
                }
                break
            case "S":
                if((position[0] + move) < parkMap.length) {
                    for (let i = position[0];i <= position[0] + move;i++) {
                        if(parkMap[i][position[1]] === "X") {
                            isBlock = true 
                            break
                        }
                    }
                    if (!isBlock) position[0] = position[0] + move
                }
                break
            case "W":
                if((position[1] - move) >= 0) {
                    for (let i = position[1];i >= position[1] - move;i--) {
                        if(parkMap[position[0]][i] === "X") {
                            isBlock = true 
                            break
                        }
                    }
                    if (!isBlock) position[1] = position[1] - move
                }
                break
            case "E":
                if((position[1] + move) < parkMap[position[0]].length) {
                    for (let i = position[1];i <= position[1] + move;i++) {
                        if(parkMap[position[0]][i] === "X") {
                            isBlock = true 
                            break
                        }
                    }
                    if (!isBlock) position[1] = position[1] + move
                }
                break
        }
    }

    
    return position;
}