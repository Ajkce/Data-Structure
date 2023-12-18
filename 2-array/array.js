//Lets build an array of our own
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems

  }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.pop()

console.log(newArray.get(0));
newArray;
//New Change from feature brancg
