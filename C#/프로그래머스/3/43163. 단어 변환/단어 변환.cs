using System;
using System.Linq;
using System.Collections.Generic;

public class Solution {
    public int solution(string begin, string target, string[] words) {    
        if (!words.Contains(target)) return 0; 
        
        // bfs 사용
        Queue<(string word, int count)> queue = new Queue<(string, int)>(); 
        queue.Enqueue((begin, 0));
        HashSet<string> visited = new HashSet<string>() { begin };

        while (queue.Count > 0) {
            var (current, count) = queue.Dequeue();  
            if ( current == target ) return count;
            
            foreach(string word in words) {
                if (visited.Contains(word)) continue;
                
                int diffCount = 0;  
                for (int i = 0; i < current.Length; i++) {  
                    if (current[i] != word[i]) diffCount++;  
                    // 1개 이상 차이나면 바로 종료
                    if (diffCount > 1) break; 
                }  
                // int diffCount = current.Zip(word, (first,second) => first != second).Count(b => b);
                if (diffCount != 1) continue;
                
                queue.Enqueue((word, count + 1));
                visited.Add(word);
            }
        }
        
        return 0;
    }
}