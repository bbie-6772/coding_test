function solution(id_list, report, k) {
    var answer = [];
    
    let reported = Object.assign(...id_list.map((e, idx) => {
        return { [e]: new Set() }
    }))
    
    let email = Object.assign(...id_list.map((e, idx) => {
        return { [e]: 0 }
    }))
    
    report.forEach((e) => {
        const [reporter, target] = e.split(" ")
        reported[target].add(reporter)
    })
    
    Object.entries(reported).forEach(([key, value]) => {
        if (value.size >= k) {
            value.forEach((e2) => {
                email[e2] += 1
            })
        }
    })

    return Object.values(email);
}