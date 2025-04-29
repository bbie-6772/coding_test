#include <algorithm>
#include <string>
#include <vector>
#include <cmath>
#include <queue>

using namespace std;


int solution(vector<vector<int>> jobs) {
    int answer = 0;
    int count = jobs.size();
    
    sort(jobs.begin(), jobs.end(), [](const vector<int>& a, vector<int>& b) {
        if (a[1] != b[1])  
            return a[1] < b[1];  
        else  
            return a[0] < b[0];  
    });
    
    int currentTime = 0;
    while(!jobs.empty()) {
        // 반복자(주소값)를 반환 하기에 auto로 받음
        auto it = find_if(jobs.begin(),jobs.end(), [&](vector<int>& x) {
            return x[0] <= currentTime;
        });
        
        if (it == jobs.end()) {
            currentTime += 1;
            continue;
        }
        
        vector<int> job = *it;
        currentTime += job[1];
        answer += currentTime - job[0];
        
        jobs.erase(it);
    }
    
    return trunc(answer / count);
}