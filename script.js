/* 
Write a method that accepts a value and create a new node, 
assigns it to the list head, and returns a pointer to the 
new head node.

Examples:
SLL1 = new SLL()
SLL1.addFront(18) => Node { data: 18, next: null }
SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;   
    }
}

class SLL {
    constructor() {
        this.head = null
    }
    addFront(val) {
        let new_node = new Node(val);
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    removeFront() {
        if(!this.head) {
            return null;
        }
        this.head = this.head.next;
        return this;
    }
    front() {
        if(this.head) {
            return this.head.data;
        }
        return null;
    }
}