using System;
using System.Collections.Generic;  
using System.Linq;

public class Solution {
    public int[] solution(string[] grid) {
        
        int rows = grid.Length;  
        int cols = grid[0].Length; 
        
        var visited = new Dictionary<(int x, int y, int direction), int>();
        // 4가지 방향 (상, 우, 하, 좌)  
        int[] dx = { -1, 0, 1, 0 };  
        int[] dy = { 0, 1, 0, -1 };  
        
        var cycleLengths = new List<int>();  
        
        for (int x = 0; x < rows;x++) 
        {
            for (int y = 0; y < cols;y++) 
            {
                for (int dir = 0; dir < 4;dir++)
                {
                    if (visited.ContainsKey((x, y, dir))) continue;
                    
                    int length = 0;
                    int currentX = x;
                    int currentY = y;
                    int currentDir = dir;
                    
                    while (!visited.ContainsKey((currentX, currentY, currentDir)))
                    {
                        visited[(currentX, currentY, currentDir)] = length;
                        length++;
                        
                        char cell = grid[currentX][currentY];
                        switch (cell) 
                        {
                            case 'L':
                                currentDir = (currentDir + 3) % 4;
                                break;
                            case 'R':
                                currentDir = (currentDir + 1) % 4;
                                break;
                        }
                        
                        currentX = (currentX + dx[currentDir] + rows) % rows;
                        currentY = (currentY + dy[currentDir] + cols) % cols;
                    }
                    
                    // 총 길이 - 시작지점
                    cycleLengths.Add(length - visited[(currentX, currentY, currentDir)]);
                }
            }
        }
        
        cycleLengths.Sort();  
        return cycleLengths.ToArray();  
    }
}