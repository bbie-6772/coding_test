function solution(n, k, enemy) {
    var answer = 0;
   
    class Minheap {
        constructor(array) {
            if(!Array.isArray(array)) return
            this.heap = array;
        }
        
        push(value) {
            this.heap.push(value);
            this.bubbleUp();
        }
        
        pop() {
            const min = this.heap[0];
            const end = this.heap.pop();
            if(this.heap.length > 0) {
                this.heap[0] = end;
                this.bubbleDown();
            }
            return min;
        }
        
        peek(){
            return this.heap[0];
        }
        
        bubbleUp(){
            let index = this.heap.length - 1;
            while(index > 0) {
                const parentIdx = Math.floor((index-1)/2);
                if (this.heap[parentIdx] <= this.heap[index]) break;
                [this.heap[parentIdx], this.heap[index]] = [this.heap[index], this.heap[parentIdx]]
                index = parentIdx;
            }
        }
        
        bubbleDown() {
            let index = 0;
            const length = this.heap.length;
            while(true) {
                let swapIndex = null; 
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = 2 * index + 2;
                
                if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[index]) {  
                    swapIndex = leftChildIndex;  
                }  
                if (rightChildIndex < length && this.heap[rightChildIndex] < (swapIndex === null ? this.heap[index] : this.heap[leftChildIndex])) {  
                    swapIndex = rightChildIndex;  
                }  
                if (swapIndex === null) break;  
                
                [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];  
                index = swapIndex;  
            }
        }
    }
    
    // 무적권 minHeap 자료구조
    const ignore = new Minheap(new Array(k).fill(0))

    for (const count of enemy) {
        // 무적권에 자기보다 작은 수가 있으면 사용
        if (count > ignore.peek()) {
            n -= ignore.pop()
            ignore.push(count) 
        } else {
            n -= count
        }
        
        if (n >= 0) answer++    
    }
    
    return answer;
}