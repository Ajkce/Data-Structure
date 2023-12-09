# Big O Rules

##### Rule 1 : Worst Case

   > Always Image the worst case senario for the code. Even though the time complexity might be faster in best case senario always think about what will happen in worst case

##### Rule 2 : Remove Constants
   > The constant big O value has significantly less value while the n value is very large then you can drop the constant and only use n instead

```javascript
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Over here in the begining the bit O value will be O(1 + n/2 + 100)
//But since we drop the constanst eventually it will be just O(n)
```

##### Rule 3: Different Terms for inputs

   > Even though we say that ignore constanst but if the constant value appears due to different input value it should be considered and shouldn't be ignored

```javascript
function CompressTwice(box1, box2){
    box1.forEach(function(boxes) {
        console.log(boxes)
    })

     box2.forEach(function(boxes) {
        console.log(boxes)
    })
}

// Hence it is looping the 2 different boxes each time the bio O will be O(a + b)
```

##### Rule 4
5. Rule 5
