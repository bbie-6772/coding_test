function solution(today, terms, privacies) {
    var answer = [];
    
    const ObjTerms = Object.assign(...terms.map((e,idx,arr) => {
        const [date , Tos] = e.split(" ")
        return { [date]:Tos }
    }))
    
    answer = privacies.map((e,idx,arr) => {
        const [date, Tos]= e.split(" ")
        let [year1, month1, day1] = date.split(".") 
        let [year2, month2, day2] = today.split(".") 
        
        if (+month1 + +ObjTerms[Tos] > 12) {
            year1 = +year1 + Math.trunc((+month1 + +ObjTerms[Tos]) / 12)
            month1 = (+month1 + +ObjTerms[Tos]) % 12
            if (month1 === 0)  {
                month1 = 12
                year1--
            }
        } else month1 = +month1 + +ObjTerms[Tos]
        
        month1 = (""+month1).padStart(2,"0")
        
        console.log(year1+month1+day1,year2+month2+day2)
        
        if (year1+month1+day1 > year2+month2+day2) return false
        else return idx+1
    }).filter((e) => e).sort((a,b) => a - b)
    
    return answer;
}