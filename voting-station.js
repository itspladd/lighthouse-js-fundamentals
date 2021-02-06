function chooseStations(stations) {
  let acceptableStations = [];
  for (let station of stations) {
    if (station[1] >= 20) {
      if (station [2] === 'school' || station[2] === 'community centre') {
        acceptableStations.push(station[0]);
      }
    }
  }
  return acceptableStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));