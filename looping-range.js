function range (start, end, step) {
  //Error checking for invalid arguments.
  //First, if the starting point is past the ending point...
  if (start > end) {
    return [];
  }

  //Second, if any arguments are undefined...
  if ((start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  }

  //Third, if the step amount is 0 or negative.
  if (step <= 0) {
    return [];
  }

  //Actual function operation starts here
  let result = [];
  for(let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));