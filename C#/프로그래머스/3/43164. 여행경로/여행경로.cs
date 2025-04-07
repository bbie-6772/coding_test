using System;
using System.Collections.Generic;
using System.Linq;

public class Solution {
    public string[] solution(string[,] tickets) {
        
        var ticketList = Enumerable.Range(0, tickets.GetLength(0))  
            .Select(i => new[] { tickets[i, 0], tickets[i, 1] })  
            .OrderBy(t => t[0])  
            .ThenBy(t => t[1])  
            .ToList();  

        Stack<Info> queue = new Stack<Info>();
        
        for (int i = ticketList.Count - 1; i >= 0; i--) {  
            if (ticketList[i][0] != "ICN") continue;
            
            bool[] visited = new bool[ticketList.Count];
            visited[i] = true;
            Info start = new Info(visited, ticketList[i][1]);
            queue.Push(start);
        } 
        
        while (queue.Count > 0) {
            Info current = queue.Pop();
            
            // string[] console = current.route.ToArray();
            // foreach (string word in console) {
            //     Console.Write($", {word}");
            // }
            // Console.WriteLine();
            
            if (current.IsAllVisited()) {
                return current.route.ToArray();
            }
            
            for (int i = ticketList.Count - 1; i >= 0; i--) {
                if (ticketList[i][0] != current.to || current.visited[i] ) continue;

                Info next = new Info(current, ticketList[i][1], i);
                queue.Push(next);
            }
        }
        
        string[] answer = new string[] {};
        return answer;
    }
    
    private struct Info {
        public bool[] visited;
        public string from;
        public string to;
        public List<string> route;
        
        // 깊은 복사 생성자 추가  
        public Info(Info previous, string newTo, int index) {  
            this.visited = (bool[])previous.visited.Clone(); // 방문 배열 복사  
            this.visited[index] = true;
            this.from = previous.to; // 이전 to가 새로운 from이 됨  
            this.to = newTo;  

            // 이전 route를 복사하고 새 목적지 추가  
            this.route = new List<string>(previous.route);  
            this.route.Add(newTo);  
        }  

        // 초기 상태 생성자  
        public Info(bool[] visited, string to) {  
            this.visited = visited;  
            this.from = "ICN";  
            this.to = to;  
            this.route = new List<string>() { "ICN", to };  
        }  
        
        // 마침 조건
        public bool IsAllVisited() {  
            for (int i = 0; i < this.visited.Length; i++) {  
                if (!this.visited[i]) {  
                    return false;  
                }  
            }  
            return true;  
        }  
    }
}
