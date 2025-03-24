using System;
using System.Linq;
using System.Collections.Generic;

public class Solution {
    public int solution(int n, int[,] computers) {
        int answer = 0;
        
        for (int i = 0; i < computers.GetLength(0);i++) 
        {    
            int[] row = new int[computers.GetLength(1)];  
            for (int j = 0; j < computers.GetLength(1); j++)  
            {  
                row[j] = computers[i, j];  
            }  

            if (!row.Any(x => x == 1)) continue;  
            dfs(row, i,computers);  
            answer++;
        }

        return answer;
    }
    
    public void dfs(int [] network, int idx, int[,] computers) {
        for (int i = 0; i < network.Length;i++) {
            if (network[i] == 0) continue;
            
            computers[idx, i] = 0;
            
            int[] next = new int[computers.GetLength(1)];  
            for (int j = 0; j < computers.GetLength(1); j++) {  
                next[j] = computers[i, j];  
            }
            dfs (next, i, computers);
        }
    }
    
//     public void checkLog(int [,] array) {
//         for (int i = 0; i < array.GetLength(0);i++) {
//             for (int j = 0; j < array.GetLength(1);j++) {
//                 Console.Write(array[i,j]);
//             }
//             Console.WriteLine();
//         }
//         Console.WriteLine("---");
//     }
}