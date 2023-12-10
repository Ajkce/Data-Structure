const strings = ['a', 'b', 'c', 'd'];

//push
strings.push('e');  //O(1)

//pop
strings.pop();  //O(1)
console.log(strings)
strings.pop();  //O(1)
console.log(strings)


//Unshift
//It is because it has to change the index of all items when ading a new item in the begining
strings.unshift('x');  //O(n)

//splice
strings.splice(2, 0, 'alien'); //O(n)
strings


//Please Note that arrays in javascript are dynamic whihc means we don't have to allocate size or memory in advance
