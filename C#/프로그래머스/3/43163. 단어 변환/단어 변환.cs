using System;
using System.Linq;
using System.Collections.Generic;

public class Solution {
    public int solution(string begin, string target, string[] words) {      
        // bfs 사용
        Queue<string> queue = new Queue<string>(new string [] {begin});
        Dictionary<string, int> visited = new Dictionary<string, int>(){{begin, 0}};

        while (queue.Count > 0) {
            string current = queue.Dequeue();
            int count = visited[current];
            
            if ( current == target ) return count;
            
            foreach(string word in words) {
                if (visited.ContainsKey(word)) continue;
                
                int diffCount = current.Zip(word, (first,second) => first != second).Count(b => b);
                if (diffCount != 1) continue;
                
                queue.Enqueue(word);
                visited.Add(word, count + 1);
            }
        }
        
        return 0;
    }
}