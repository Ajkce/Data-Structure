//Lets create our own linkedList
//10 --> 5 ---> 16

//This is what we want to create
let mySampleLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    let prevlength = this.length;

    this.length = prevlength + 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = {
      value: value,
      next: null,
    };
    this.tail = newNode;
    let prevLength = this.length;
    this.length = prevLength + 1;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);

console.log(myLinkedList);
