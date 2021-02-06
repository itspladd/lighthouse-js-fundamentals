let output = "";

for (let i = 100; i <= 200; i++) {
  //Clear output first every time
  output = "";

  //Check for first condition
  if (i % 3 === 0) {
    output += "Loopy";
  }
  if (i % 4 === 0) {
    output += "Lighthouse";
  }
  if (!(i % 3 === 0 || i % 4 === 0)) {
    output = i;
  }
  console.log(output);
}