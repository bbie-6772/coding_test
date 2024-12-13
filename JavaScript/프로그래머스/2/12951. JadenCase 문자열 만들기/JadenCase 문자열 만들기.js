function solution(s) {
    var answer = '';
    
    answer = s.split(" ").map((e) => {
        if (e === "") return "" 
        e = e.toLowerCase()
        if ( /[a-z]/.test(e[0])) e = e.replace(e[0],e[0].toUpperCase())
        return e
    }).join(" ")
    
    return answer;
}