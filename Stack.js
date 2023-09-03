class Node{
 constructor(val){
     this.val = val;
     this.next = null;
 }  
}


/*

LIFO
Last In First Out

st = []
st.push('first');
st.push('second');
['second','first']
st.pop(); // second will be removed
['first']


*/

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // push
    push(val){ // add in first
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = this.first;
        }else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        
        this.size++;
        return this;
    }

    // pop
    pop(){ // remmove in first
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


let st = new Stack();
st.push('first');
st.push('second');
st.push('third');
st.push('fourth');
// st.pop();
// st.pop();
// st.pop();
// st.push('second half');
