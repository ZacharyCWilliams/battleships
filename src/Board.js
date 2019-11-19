class Board {
  constructor(grid) {
    this.grid = [
      ["E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E"],
      ["E", "E", "E", "E", "E", "E"]
      ]
  }

  checkSpace(row, col) {
    return this.grid[row][col]
  }

  placeShips(row, col, val) {
    this.grid[row][col] = val
  }

  checkShips() {
    let flattenedGrid = this.grid.flat()
    let shipsLeft = 0
    for(let i = 0; i < flattenedGrid.length; i++) {
      if (flattenedGrid[i] === "S") {
        shipsLeft += 1
      }
    }
    return shipsLeft
  }

  initializeBoardWithShips() {
    
    const numberOfShips = 8
    while (this.checkShips() < numberOfShips) {
      let randomRow = Math.floor(Math.random() * 6);
      let randomCol = Math.floor(Math.random() * 6);
      this.placeShips(randomRow, randomCol, "S")
    }
  }

  attack(row, col) {
    if (this.checkSpace(row, col) === "S") {
      this.grid[row][col] = "H"
      return true
    } else {
      this.grid[row][col] = "X"
      return false
    }
  }

  hideShips() {
    return this.grid.map(array => {
      return array.map(ele => {
        if (ele === "S") {
          return "E"
        } else {
         return ele
        }
      })
    })
  }
};