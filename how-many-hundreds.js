//Implementation using math (I did this one first)
function howManyHundreds(number) {
  return (number - (number%100))/100;
}

//Implementation using string manipulation (This is the one I actually submitted, just to see if the evaluation was OK with it)
/* function howManyHundreds(number) {
  if (number < 100) {
    return 0;
  }
  let numString = String(number);
  return Number(numString.slice(0, (numString.length - 2)));
} */

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);