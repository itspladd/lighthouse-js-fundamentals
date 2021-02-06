function finalPosition(moves) {
  let positionX = 0;
  let positionY = 0
  for (let move of moves) {
    switch (move) {
      case "north":
        positionY++;
        break;
      case "south":
        positionY--;
        break;
      case "east":
        positionX++;
        break;
      case "west":
        positionX--;
        break;
    }
  }
  return [positionX, positionY];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));
