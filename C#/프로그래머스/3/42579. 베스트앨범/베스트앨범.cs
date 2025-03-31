using System;
using System.Linq;
using System.Collections.Generic;

public class Solution {
    public int[] solution(string[] genres, int[] plays) {
        Dictionary <string, List<int>> genreTopTracks = new Dictionary<string, List<int>>();
        Dictionary <string, int> genreTotalPlays = new Dictionary<string,int>();
        
        for (int i = 0;i < genres.Length;i++) 
        {
            string genre = genres[i];  
            int playCount = plays[i];  
            
            if(!genreTotalPlays.ContainsKey(genres[i]))
            {
                genreTotalPlays[genre] = 0;  
                genreTopTracks[genre] = new List<int>();  
            }
            genreTotalPlays[genre] += playCount;
            
            var topTracks = genreTopTracks[genre];
            if (topTracks.Count < 2)  
            {                  
                topTracks.Add(i); 
                continue;
            }
            
            // 2개 이상 Index가 있을 경우 비교 시작
            int minPlayIndex = topTracks[0];  
            if (plays[minPlayIndex] > plays[topTracks[1]])  
            {  
                minPlayIndex = topTracks[1];  
            }  

            if (playCount > plays[minPlayIndex])  
            {  
                topTracks.Remove(minPlayIndex);  
                topTracks.Add(i);  
            }  
        }
        
        List<int> answer = new List<int>();
        var sortedGenres = from pair in genreTotalPlays orderby pair.Value descending select pair.Key;
        
        foreach (string genre in sortedGenres) 
        {

            if (genreTopTracks[genre].Count == 1) 
            {
                answer.Add(genreTopTracks[genre][0]);
                continue;
            }
            
            // 값 비교 
            if ( plays[genreTopTracks[genre][0]] > plays[genreTopTracks[genre][1]] )
            {
                answer.Add(genreTopTracks[genre][0]);
                answer.Add(genreTopTracks[genre][1]);
            } 
            else if ( plays[genreTopTracks[genre][0]] < plays[genreTopTracks[genre][1]] )
            {
                answer.Add(genreTopTracks[genre][1]);
                answer.Add(genreTopTracks[genre][0]);
            } 
            else if (genreTopTracks[genre][1] > genreTopTracks[genre][0]) 
            {
                answer.Add(genreTopTracks[genre][0]);
                answer.Add(genreTopTracks[genre][1]);
            }
            else 
            {
                answer.Add(genreTopTracks[genre][1]);
                answer.Add(genreTopTracks[genre][0]);
            }
        }
        return answer.ToArray();
    }
}