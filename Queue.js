class Node{
 constructor(val){
     this.val = val;
     this.next = null;
 }  
}

/*

q = [];
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');
['first','second', 'third']

first -> second -> third

last -> newNode

*/

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // add value in queue (last)
    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        return this;
    }

    // remove value from queue (first)
    dequeue(){
        if(!this.first){
            return null;
        }
        let poppedNode = this.first;
        if(this.first === this.last){ // last node, reset first and last to null
            this.first = null;
            this.last = null;
        }else{
            this.first = this.first.next;
        }

        this.size--;
        return poppedNode.val;
    }
}

let q = new Queue();
q.enqueue('first');
q.enqueue('second');
q.enqueue('third');
q.enqueue('4th');
q.dequeue();

