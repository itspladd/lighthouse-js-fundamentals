function ageCalculator(name, yearOfBirth, currentYear) {
  if (yearOfBirth > currentYear) {
    return "Error: Birth year is in the future!";
  }

  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));