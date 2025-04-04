using System;
using System.Collections.Generic;

public class Solution {
     // 최소 신장 트리 (크루스칼 알고리즘) 개선된 구현  
    public int solution(int n, int[,] costs) {  
        // 간선을 비용 순으로 정렬  
        Edge[] edges = new Edge[costs.GetLength(0)];  
        for (int i = 0; i < costs.GetLength(0); i++) {  
            edges[i] = new Edge(  
                costs[i, 0],   
                costs[i, 1],   
                costs[i, 2]  
            );  
        }  
        Array.Sort(edges, (a, b) => a.cost.CompareTo(b.cost));
        
        // 유니온-파인드를 위한 부모 배열 초기화  
        int[] parent = new int[n];  
        for (int i = 0; i < n; i++) {  
            parent[i] = i;  
        }  
        
        int totalCost = 0;  
        int connectedEdges = 0;  
        
        foreach (Edge edge in edges) {  
            // 사이클을 형성하지 않는 간선만 선택 (= 루트가 다른 지점에서만)
            if (Find(parent, edge.from) == Find(parent, edge.to))
                continue;
                
            Union(parent, edge.from, edge.to);  
            totalCost += edge.cost;  
            connectedEdges++;  

            // 모든 노드가 연결되면 종료  
            if (connectedEdges == n - 1) break;  
        }  
        
        return totalCost;  
    }  
    
    // 간선 정보를 담는 구조체  
    private struct Edge {  
        public int from;  
        public int to;  
        public int cost;  
        
        public Edge(int from, int to, int cost) {  
            this.from = from;  
            this.to = to;  
            this.cost = cost;  
        }  
    }  

    // 경로 압축을 사용한 Find 연산  
    private int Find(int[] parent, int x) {  
        if (parent[x] != x) 
            parent[x] = Find(parent, parent[x]);  
        
        return parent[x];  
    }  
    
    // Union 연산  
    private void Union(int[] parent, int x, int y) {  
        int rootX = Find(parent, x);  
        int rootY = Find(parent, y);  
        
        if (rootX != rootY)
            parent[rootY] = rootX;  
    }  
}