function solution(targets) {
    targets.sort((a,b) => +a[1] - +b[1]);
    let missileCount = 0;
    let lastMissilePosition = -1;

    for (const [start,end] of targets) {
        if (start > lastMissilePosition) {
            missileCount++;
            lastMissilePosition = end - 0.5
        }
    }

    return missileCount;
}