function loopyLighthouse(range, multiples, words) {
  if (multiples.length !== words.length) {
    return "Error: Number of multiples and number of words do not match.";
  }
  for (let i = range[0]; i <= range[1]; i++) {
    let string = "";
    for (let j = 0; j < multiples.length; j++) {
      string += i % multiples[j] === 0 ? words[j] : "";
    }
    console.log(string === "" ? i : string);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);