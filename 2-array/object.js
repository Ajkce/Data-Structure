//Refrence type

var object1 = { value: 10 };
var object1 = object1;
var object3 = { value: 10 };

//Context vs Scope
function b() {
  let a = 4;
}

//Instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }
}
const player1 = new Player("Ajaya", "Football");
player1.sayMyName();
