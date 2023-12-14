class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }
    let currNode = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

//joy
//Matt
//Pavel
//Samir

const newQueue = new Queue();
console.log(newQueue.peek());
console.log(newQueue.enqueue("Joy"));
console.log(newQueue.enqueue("Matt"));
console.log(newQueue.enqueue("Pavel"));
console.log(newQueue.dequeue());
