class Player {
  getMove() {
    let movePos = window.prompt("enter a position with coordinates seperated with a space like `0 3`. Numbers must be between 0 and 5")
    let intPos = movePos.split(" ").map(Number)
    return intPos
  }
}