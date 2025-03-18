using System;
using System.Collections.Generic;  

public class Solution {
    public int solution(int[,] board) {
        int answer = board.Length;
        HashSet<string> mine = new HashSet<string>();
        
        for (int i = 0; i < board.GetLength(0); i++) {  
            for (int j = 0; j < board.GetLength(1); j++) {  
                if (board[i, j] != 1) continue;
                    
                for (int startX = i-1; startX <= i+1; startX++) {
                    if (startX < 0 || startX >= board.GetLength(0)) continue;
                    for (int startY = j-1; startY <= j+1; startY++) {
                        if (startY < 0 || startY >= board.GetLength(1)) continue;
                        mine.Add(startX + ","+ startY);
                    }
                }
            }  
        }
        
        return answer - mine.Count;
    }

}