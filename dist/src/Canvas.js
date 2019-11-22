
// Box width
let bw = 600;
// Box height
let bh = 300;
// Padding
let p = 0;


window.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.getElementById("game-canvas");
  let context = canvas.getContext("2d");
  function drawBoard() {
    for (let x = 0; x <= bw; x += 50) {
      context.moveTo(0.5 + x + 0, 0);
      context.lineTo(0.5 + x + 0, bh + 0);
    }

    for (let x = 0; x <= bh; x += 50) {
      context.moveTo(0, 0.5 + x + 0);
      context.lineTo(bw + 0, 0.5 + x + 0);
    }
    context.strokeStyle = "black";
    context.stroke();
  }

  drawBoard();
})