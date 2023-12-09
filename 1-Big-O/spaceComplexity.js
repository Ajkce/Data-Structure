function boooo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("Boooooo!");
  }
}

boooo([1, 2, 3, 4, 5, 6, 7]);

//It has space complexity of O(1)

function hi(input) {
  let hiArray = [];
  for (let i = 0; i < input; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}
console.log(hi(6)); //O(n)
