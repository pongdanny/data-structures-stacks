// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value);
        if(!this.back){
            this.front = newNode;
            this.back = newNode;
            this.length++;
        }else{
            let oldback = this.back
            this.back = newNode;
            oldback.next = newNode;
            this.length++;
        }
        return this.length;
    }

    dequeue(){
        if(!this.back) return null;
        let node = this.front;
        if(this.length === 1){
            this.front = null;
            this.back = null;
            this.length--;
        }else{
            let second = node.next;
            this.front = second;
            this.length--;
        }
        return node.value;
    }

    size(){
        return this.length;
    }

}
let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())


exports.Node = Node;
exports.Queue = Queue;