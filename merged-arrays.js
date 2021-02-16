function merge (arrayOne, arrayTwo) {
  //Shortcut checking: if either of the arrays are empty, just return the other array. Otherwise, go into the actual merging.
  if(arrayOne.length === 0) {
    return arrayTwo;
  } else if (arrayTwo.length === 0) {
    return arrayOne;
  } else {
    while (arrayOne.length > 0) {
      //Since we modify the length of arrayTwo inside the for loop, then we need to define its initial length
      let arrayTwoLength = arrayTwo.length;
      for (let i = 0; i < arrayTwoLength; i++) {
        
        //If the first number in arrayOne is less than or equal to a number in arrayTwo, remove it from arrayOne and insert it into arrayTwo, then exit the loop.
        //If we reach the end of arrayTwo and we didn't already insert a number, we put the number at the end.
        if (arrayOne[0] <= arrayTwo[i]) {
          arrayTwo.splice(i, 0, arrayOne.shift());
          break;
        } else if (i === arrayTwo.length - 1) {
          arrayTwo.push(arrayOne.shift());
        }
      }
    }
  }

  return arrayTwo;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);