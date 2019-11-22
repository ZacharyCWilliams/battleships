console.log("Webpack is working!")

// import PlayGame from "./PlayGame"
import Player from "./Player";
import Board from "./Board";
import Game from "./Game";

window.Board = Board
window.Player = Player
window.Game = new Game()
