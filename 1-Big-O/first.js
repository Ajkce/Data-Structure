//Time Complexity of O(n)   ----->> Linear Time

const nemo = ["nemo"];
const large = new Array(1000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  let t1 = performance.now();
  console.log("Call to find nemo took" + (t1 - t0) + "Milliseconds");
}
findNemo(large);

// Time Complexity of O(1)   -------->> Constant Time

const names = ["Ajaya", "Susan", "Sunil", "Rupak"];

function firstName(param) {
  console.log(names[0]);
}

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

//BIG 0(3 + 4n)  ------>> O(n)

//Log all the array pairs

const boxes = [1, 2, 3, 4, 5];
function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairs(boxes);

//For these nested loops we use multiplication 
// O(n^2)
