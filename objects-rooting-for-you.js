function judgeVegetable (vegetables, metric) {
  let currentWinnerIndex = 0;
  for (let veg in vegetables) {
    if (vegetables[veg][metric] > vegetables[currentWinnerIndex][metric]) {
      currentWinnerIndex = veg;
    }
  }

  return vegetables[currentWinnerIndex].submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric));
