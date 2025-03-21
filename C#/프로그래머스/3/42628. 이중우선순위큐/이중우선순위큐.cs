using System;
using System.Linq;
using System.Collections.Generic;

public class Solution {
    public int[] solution(string[] operations) {
        List<int> queue = new List<int>();
        
        foreach(string operation in operations) 
        {
            
            if (operation == "D 1") 
            {
                if (queue.Count > 0)
                    queue.Remove(queue.Max());
                continue;
            }
            if (operation == "D -1")
            {
                if (queue.Count > 0)
                    queue.Remove(queue.Min());
                continue;
            }
            
            int number = int.Parse(operation.Split(" ")[1]);
            queue.Add(number);
        }
        
        int[] answer;
        
        if(queue.Count > 0) 
            answer = new int[] {queue.Max(), queue.Min()};
        else
            answer = new int[] {0, 0};

        return answer;
    }
}