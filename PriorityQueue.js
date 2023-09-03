// Example of Binary heap || Min Binary heap with priority

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }

    
}


class PriorityQueue{
     constructor(){
         this.values = [];
     }


    enqueue(val, priority){
        let newNode =  new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
        return this;
    }


    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(idx > 0){
            let parentIdx =  Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(parent.priority <= element.priority) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    
    dequeue(){
        let end = this.values.pop();
        let length = this.values.length;
        if(length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return this;
    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let element = this.values[idx];

        while(true){

            let rightChild, leftChild;
            let swapIdx = null;
            
            // check left child 
            let leftChildIdx = idx * 2 +1;

            if(leftChildIdx < length){ // check if array out of bound
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swapIdx = leftChildIdx;
                }
            }

            // check right child 
            let rightChildIdx = idx * 2 + 2;

            if(rightChildIdx < length){ // check if array out of bound
                rightChild = this.values[rightChildIdx];
                if(
                    (swapIdx === null && leftChild.priority < element.priority) 
                    ||
                    (swapIdx !== null && rightChild.priority < leftChild.priority)
                ){
                    swapIdx = rightChildIdx;
                }
            }
            
            if(swapIdx === null) break;
            
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            idx = swapIdx;
            
        }
    }
    
}


let pq = new PriorityQueue();
pq.enqueue(10, 5);
pq.enqueue(12, 3);
pq.enqueue(13, 2);
pq.enqueue(11, 1);
pq.enqueue(14, 4);
pq.enqueue(9, 0);
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
pq.dequeue();
