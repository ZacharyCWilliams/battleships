let Board = require("./Board")
let Player = require("./Player")

class Game {
  constructor() {
    this.board = new Board();
    this.player = new Player();
  }

  startGame() {
    Board.initialzeBoardWithShips();
    console.log("8 ships have been placed!")
    Board.printGameBoard();
  }
}