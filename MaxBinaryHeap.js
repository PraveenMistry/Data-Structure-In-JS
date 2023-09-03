// Binary Heap is two type max and min


class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }

    
    // insert(element) : two steps push, bubble up
    insert(element){
        this.values.push(element);
        this.bubbleUp();
        return this;
    }
    
    bubbleUp(){
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element <= parent) break; // break if element values is not more than parent        
            
            // swap
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            parentIdx = idx;
            
        }
        
    }

    extract(){
        let idx = 0;
        let element = this.values[idx];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[idx] = end;
            this.sinkDown();
        }
        return this;
    }

    sinkDown(){
        let idx = 0;
        let length = this.values.length;
       
        let counter = 0;


        while(true){

            let leftChild,rightChild;
            let swapIdx = null;
            let element = this.values[idx];
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2; 

            counter++;
            if(counter > 40){
                return "ForceFully Closed";
            }
                        
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                 if(leftChild > element){
                     swapIdx = leftChildIdx;
                 }
                
            }
            
            if(rightChildIdx < length){ 
                rightChild = this.values[rightChildIdx];
                if((swapIdx === null && rightChild > element) || (swapIdx !== null && rightChild > leftChild)){
                     swapIdx = rightChildIdx;
                 }
            }
           
            
            if(swapIdx === null){
                break;
            }

            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            idx = swapIdx;
            
        }
        
    }
}



let maxbh = new MaxBinaryHeap();
maxbh.insert(5);
maxbh.insert(46);
maxbh.insert(9);
maxbh.insert(6);
maxbh.insert(16);
maxbh.insert(26);

 maxbh.extract();
 maxbh.extract();
 maxbh.extract();
 // maxbh.extract();
 // maxbh.extract();
 // maxbh.extract();
