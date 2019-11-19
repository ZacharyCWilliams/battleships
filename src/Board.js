class Board() {
  constructor() {
    this.grid = [
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"],
      ["E"], ["E"], ["E"], ["E"], ["E"], ["E"]
      ]
  }

  const placeShips = function(pos, val) {
    let row, col = pos;
    this.grid[row, col] = val
  }

  const checkShips = function() {
    let flattenedGrid = this.grid.flat()
    let shipsLeft = 0
    for(let i = 0; i < flattenedGrid.length; i++) {
      if (flattenedGrid[i] === "S") {
        shipsLeft += 1
      }
    }
    return shipsLeft
  }

  const initializeBoardWithShips = function() {
    const numberOfShips = 8
    while(self.checkShips < numberOfShips) {
      let randomRow = Math.floor(Math.random() * 10);
      let randomCol = Math.floor(Math.random() * 10);
      let pos = [randomRow, randomCol] 
      placeShips(pos, "S")
    }
  }
}