class Graph{
    
    // undirected / adjacency List
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(v){
        if(!this.adjacencyList[v]){
            this.adjacencyList[v] = [];  
            return true;
        }else{
            return false; // already have 
        }
    }

    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1]) { // if vertex1 exists
            this.adjacencyList[vertex1].push(vertex2);
        }
        if(this.adjacencyList[vertex2]) { // if vertex2 exists
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2){
        this.adjacencyList[vertex1] = (this.adjacencyList[vertex1] || []).filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = (this.adjacencyList[vertex2] || []).filter(v => v !== vertex1);
    }

    removeVertex(vertex){
        // remove edge first
        while(this.adjacencyList[vertex].length){
            let adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacencyVertex);
        }
        delete this.adjacencyList[vertex];
    }


    // Traversal
    depthFristRecursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList; // reference (this) changes in inner function 
        
        let helper = function(vertex){
            
            if(!vertex) return null; // base case

            visited[vertex] = true;
            result.push(vertex);
            
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    helper(neighbor);
                }
            })   
        }
        
        helper(start);
        return result;
    }

    depthFristIterative(start){
        const stack = [start];
        const visited = {};
        const result = [];
        let currentVertex;
        
        visited[start] = true;

        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }

        return result;
    }

    breadthFirst(start){
        const queue = [start];
        const visited = {};
        const result = [];
        let currentVertex;
        
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }

        return result;
    }

    
}



let g = new Graph();
// g.addVertex('Tokya');
// g.addVertex('Los');
// g.addVertex('Hong Kong');
// g.addVertex('Mumbai');
// g.addVertex('Delhi');
// g.addVertex('Landon');
// g.addEdge('Tokya','Hong Kong');
// g.addEdge('Delhi','Hong Kong');
// g.addEdge('Mumbai','Hong Kong');
// g.addEdge('Tokya','Mumbai');
// g.addEdge('Tokya','Los');
// g.addEdge('Los','Landon');
// g.removeEdge('Delhi', 'Hong Kong');
// g.removeVertex('Hong Kong');



g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A','B');
g.addEdge('A','C');
g.addEdge('B','D');
g.addEdge('C','E');
g.addEdge('D','E');
g.addEdge('D','F');
g.addEdge('E','F');


// Traversal
// g.depthFristRecursive('A');
// g.depthFristIterative('A');
// g.breadthFirst('A');

/*

            A
          /   \
        B      C
        |      |
        |      |
        D ---- E
        \      /
         \    /
            F
        
*/
