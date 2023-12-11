//Create a function that reverses a string

function reverseString(str) {
  //Check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "hmm that is not good";
  }

  const strArray = str.split("");
  const totalItems = str.length - 1;
  let newArray = [];

  for (let i = totalItems; i >= 0; i--) {
    newArray.push(strArray[i]);
  }

  return newArray.join("").toUpperCase();
}

console.log(reverseString("Ajaya"));
