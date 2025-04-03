using System;
using System.Collections.Generic;

public class Solution {
    public int solution(int n, int[,] edge) {
        int answer = 0;
        Dictionary<int, int> visited = new Dictionary<int, int>() {{1, 0}};
        Dictionary<int,List<int>> node = new Dictionary<int,List<int>>();
        for(int i = 0;i < edge.GetLength(0);i++) {
            if(edge[i,0] == edge[i,1]) continue;
            
            if(!node.ContainsKey(edge[i,0]))
                node[edge[i,0]] = new List<int>();
            if(!node.ContainsKey(edge[i,1]))
                node[edge[i,1]] = new List<int>();
            
            node[edge[i,0]].Add(edge[i,1]);
            node[edge[i,1]].Add(edge[i,0]);
        }
        
        Queue<(int current,List<int> nodes)> queue = new Queue<(int current,List<int> nodes)>();
        queue.Enqueue((1, node[1]));
        
        while(queue.Count > 0) {
            var (current, nodes) = queue.Dequeue();
            
            foreach (int number in nodes) {
                if (visited.ContainsKey(number)) continue;
                
                visited[number] = visited[current] + 1;
                queue.Enqueue((number, node[number]));
            }
        }
        
        int maxValue = 0;  
        foreach (int value in visited.Values) {  
            if (value > maxValue)  
            {  
                maxValue = value;  
                answer = 1;  
            }  
            else if (value == maxValue)  
            {  
                answer++;  
            }  
        }
        
        return answer;
    }
}