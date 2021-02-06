function ageCalculator(name, yearOfBirth, currentYear) {
  //Just one quick-and-dirty error check, in case someone gets the year inputs mixed up.
  if (yearOfBirth > currentYear) {
    return `Error: Birth year (${yearOfBirth}) is in the future! You listed the current year as ${currentYear}.`;
  }

  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

//Should return "Miranda is 32 years old."
console.log(ageCalculator("Miranda", 1983, 2015));

//Should return "Ferdinand is 27 years old."
console.log(ageCalculator("Ferdinand", 1988, 2015));