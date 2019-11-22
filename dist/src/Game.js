class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
    this.remainingMisses = 15
  }

  startGame() {
    this.board.initializeBoardWithShips()
    this.board.printGameBoard()
    console.log("There are 5 ships on the board!")
    while (!this.gameOver()) {
      this.currentTurn()
      console.log("---------")
    }

  }

  lose() {
    if (this.remainingMisses === 0) {
      console.log("you lost! game over")
      return true
    } else {
      return false
    }
  }

  win() {
    if (this.board.checkShips() === 0) {
      console.log("you won! game over!")
      return true
    } else {
      return false
    }
  }

  gameOver() {
    if (this.win() || this.lose()) {
      return true
    } else {
      return false
    }
  }

  currentTurn() {
    let position = this.player.getMove()
    let row = position[0]
    let col = position[1]
    if (!this.board.attack(row, col)) {
      this.remainingMisses -= 1
      console.log(`Remaining misses: ${this.remainingMisses}`)
    }
    this.board.printGameBoard()
  }

}

export default Game