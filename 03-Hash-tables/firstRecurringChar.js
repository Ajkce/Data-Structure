//Given an array return the first repeated character

//array1 = [2,4,6,8,3,2,1]
//It shoud return 2

//array2 = [1,2,3,4,5]
//It should return undefined

function returnRecurring(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
}
//This has the time complexity of O(n^2)

function returnRecurring2(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) {
      return array[i];
    } else {
      map[array[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}

//This has time complexity of O(n) and space complexity of O(n)

console.log(returnRecurring2([1, 3, 1, 4, 5, 6, 7, 2]));
