// Rendering functions

// Iterates through board and draws squares & highlights selected and 
// mouse-overed tiles
function renderBoard() {
  for (var row = 0; row < numberOfRows; row++) {
    for (var col = 0; col < numberOfColumns; col++) {
      var square = board[row][col];
      drawSquare(square);
    }
  }
  drawMouseOverTile();
  drawSelectedTile();
}

// Generates text that displays soldier-tile information
function drawnSoldierCount(square) {
  canvasContext.textAlign="center"; 
  canvasContext.font = "20px Georgia";
  canvasContext.fillStyle = "black";
  if (square.player) {
    canvasContext.fillText(numberOfActiveSoldiers(square) + "/" + 
    numberOfInactiveSoldiers(square), (columnWidth * square.x) + (columnWidth / 2), (rowHeight * square.y) + (rowHeight / 2));
  }
}

// Generates the square's color and text
function drawSquare(square) {
  if (square.player == false){ 
    var color = "grey";
  } else if (square.player == playerOne) {
    var color = "blue";
  } else if (square.player == playerTwo) {
    var color = "red";
  }
  canvasContext.fillStyle = color;
  canvasContext.fillRect(columnWidth * square.x, rowHeight * square.y, columnWidth, rowHeight);
  drawnSoldierCount(square);
}

// Highlights the mouse-overed square
function drawMouseOverTile() {
  var square = board[mouseTile.row][mouseTile.col];
  if (totalNumberOfSoldiers(square) > 0) {
    canvasContext.fillStyle = "rgba(255, 255, 255, 0.4)";
    canvasContext.fillRect(columnWidth * mouseTile.col, rowHeight * mouseTile.row, columnWidth, rowHeight);
  } 
}

// Highlights the selected square
function drawSelectedTile() {
  if (selectedSquare) {
    canvasContext.fillStyle = "rgba(255, 255, 255, 0.6)";
    canvasContext.fillRect(columnWidth * selectedSquare.x, rowHeight * selectedSquare.y, columnWidth, rowHeight);
  }
}