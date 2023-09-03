/*
Property of a node is left, right child and its value
*/

class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


/*
Property of a bst is root
*/

class BinarySearchTree{
    constructor(){
        this.root = null;
        this.counter = 0;
    }

    // insert || add child to BinarySearchTree
    insert(val){
        let newNode = new Node(val);
        
        if(!this.root){ // if tree is empty, add root node
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while(true){
            if(current.val === val){
                return 'Duplicate valud not allowed!'
            }
            if(current.val > val){
                if(!current.left){
                    current.left = newNode;
                    return true;
                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode;
                    return true;
                }
                current = current.right;
            }
        }
    }


    // find the value in tree
    find(val){
        if(!this.root){ // if tree is empty, add root node
            return false;
        }

        let current = this.root;
        while(true){
            if(current.val === val){
                return true;
            }
            if(current.val > val){
                if(!current.left){
                    return false;
                }
                current = current.left;
            }else{
                if(!current.right){
                    return false;
                }
                current = current.right;
            }
        }
    }

    // BFS (breath first search) Traverse => Queue
    BFS(){
        if(!this.root){
            return null;
        }
        let visited = [];
        let queue = [];
        let current = this.root;
        queue.push(current); // push into queue (in the end)
    
        while(queue.length){
            current = queue.shift();
            visited.push(current.val);
            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
           
        }

        return visited;
    }


    
    // DFS (depth first search) Traverse => Stack

    // pre order traversal
    preOrderDFS(){
        if(!this.root){
            return null;
        }
        let visited = [];
        let traverse = function(node){
            visited.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

    
    // pos order traversal
    posOrderDFS(){
        if(!this.root){
            return null;
        }
        let visited = [];
        let traverse = function(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.val);
        }
        traverse(this.root);
        return visited;
    }
    

    
    // in order traversal
    inOrderDFS(){
        if(!this.root){
            return null;
        }
        let visited = [];
        let traverse = function(node){
            if(node.left) traverse(node.left);
            visited.push(node.val);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }
    
    
}


let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(15);
bst.insert(10);
bst.insert(12);
bst.insert(13);
bst.insert(23);
bst.insert(24);
bst.insert(113);
// bst.find(113);
// bst.find(1)
bst.BFS();
bst.preOrderDFS();
bst.posOrderDFS();
bst.inOrderDFS();
// bst.root = new Node(20);
// bst.root.left = new Node(15);
// bst;
