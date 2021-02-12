function smartGarbage(trash, bins) {
  bins[trash]++;
  return bins;
}

console.log(smartGarbage('recycling', {'waste':5,'recycling':3,'compost':11}));