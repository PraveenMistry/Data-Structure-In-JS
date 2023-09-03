class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


class SinglyLinkedList{
    // construct singly linked list
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head; // so new node linked with tail
        }else{
            this.tail.next = newNode; // add node to tail next (last)
            this.tail = newNode; // make last (newly created) as tail
        }
        this.length++;
        return this;
    }

    pop(){ // Removing a node from the end of the list
        if(!this.head){
            return undefined;
        }
        
        let current = this.head;
        let newTail = current; // to make 2nd last node as tail and next should be null

        // loop though the last node from the list
        while(current.next){
            newTail = current; // also know as prev
            current = current.next;
        }

        this.tail = newTail;    // Now tail become 2nd last node 
        this.tail.next = null;  // Now tail next will be null

        this.length--;

        // if list have only one node reset head and tail as null
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        
        return current; // return removed node
    }

    shift(){ // Removing a node from the beginning from the list
        if(!this.head){
            return undefined;
        }

        let oldHead = this.head; // old head will be removed 
        this.head = this.head.next;
        this.length--;
        
        if(this.length === 0){ // reset tail as null if removed node is last
            this.tail = null;    
        }
        
        oldHead.next = null; // optional if you want to disconnect with our node
        return oldHead;
    }


    unshift(val){ // Adding a node at beginning
        let newNode = new Node(val);
        
        if(!this.head){
            this.head = newNode;
            this.tail = this.head; // so new node linked with tail
        }else{
            newNode.next = this.head;  // head next wil be new node next
            this.head = newNode;  // new head will be newly created node
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null;
        }

        let current = this.head;
        let counter = 0;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    set(val, index){
        let node = this.get(index);
        if(!node){
            return false;
        }
        node.val = val;
        return true;
    }

    insert(val, index){ 
        // check if index is Out of bound or not
        if(index < 0 || index > this.length){
            return false;
        }

        // if insert at beginning
        if(index === 0){
            this.unshift(val);
        }
        
        // if insert at last
        if(index === this.length){
            this.push(val);
        }

        // if insert between somewhere
        // get the previous node by get method by passing index-1;
        let prevNode = this.get(index-1);
        let newNode = new Node(val);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index){
        // check if index is Out of bound or not
        if(index < 0 || index > this.length){
            return undefined;
        }

        // if remove at beginning
        if(index === 0){
            this.shift();
        }
        
        // if remove at last
        if(index === this.length){
            this.pop();
        }

        // get the previous node by get method by passing index-1;
        let prevNode = this.get(index-1);
        let removedNode = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return removedNode;
    }

    reverse(){
        // swap head and tail
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        // create two pointers
        let prev = null;
        let next;

        // loop though list and swap
        for(let i=0;i<this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
       return this;
    }
    
    
}


let list = new SinglyLinkedList();

list.push("hello");
list.push("How");
list.push("about");
list.push("you");
list.push("and me");
list.push("?");
// list.pop();
// list.shift();
// list.unshift("First")
// list.get(3);
// list.set('me',3);
// list.insert('and me',4)
// list.remove(4)
list.reverse();
