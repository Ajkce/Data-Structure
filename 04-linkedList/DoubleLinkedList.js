//Lets create our own linkedList
//10 --> 5 ---> 16

//This is what we want to create


class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
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
      prev: null,
    };
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    let prevLength = this.length;
    this.length = prevLength + 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    //Check Params
    if (index >= this.length) {
      return this.append(value);
    }
    if (index === 0) {
      return this.prepend(value);
    }

    let newNode = {
      value: value,
      next: null,
    };

    const leader = this.traverseToIndex(index - 1);
    let nextItem = leader.next;
    leader.next = newNode;
    newNode.next = nextItem;
  }

  traverseToIndex(index) {
    //Check Params

    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1);

    let deletingNode = leader.next;

    let tailNode = deletingNode.next;
    leader.next = tailNode;
  }
}

const myDoubleLinkedList = new DoubleLinkedList(10);
myDoubleLinkedList.append(20)
console.log(myDoubleLinkedList);
