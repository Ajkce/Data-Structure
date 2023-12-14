class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length = 1;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
      this.length++;
    }
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.length === 1) {
      this.bottom = null;
    }

    const currentNode = this.top;

    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push("google");
console.log(myStack.push("youtube"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
