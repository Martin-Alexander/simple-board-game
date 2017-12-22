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
  var x = iso_x(columnWidth * square.x, rowHeight * square.y);
  var y = iso_y(columnWidth * square.x, rowHeight * square.y);
  canvasContext.textAlign="center"; 
  canvasContext.font = "16px Georgia";
  if (square.HQ) {
    canvasContext.fillStyle = "white";
  } else {
    canvasContext.fillStyle = "black";
  }
  if (square.player) {
    canvasContext.fillText(numberOfActiveSoldiers(square) + "/" + 
    numberOfInactiveSoldiers(square), x, y + (rowHeight / 2));
  }
}

// Generates the square's color and text
function drawSquare(square) {
  var x = iso_x(columnWidth * square.x, rowHeight * square.y);
  var y = iso_y(columnWidth * square.x, rowHeight * square.y);

  if (square.player == false){ 
    var color = "grey";
  } else if (square.player == playerOne) {
    var color = "blue";
  } else if (square.player == playerTwo) {
    var color = "red";
  }

  var pat = canvasContext.createPattern(img, "repeat");
  canvasContext.fillStyle = pat;
  canvasContext.beginPath();
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(x + columnWidth, y + rowHeight/2);
  canvasContext.lineTo(x, y + rowHeight);
  canvasContext.lineTo(x - columnWidth, y + rowHeight/2);
  canvasContext.closePath();
  canvasContext.fill();

  if (square.HQ) {
    canvasContext.fillStyle = "rgba(0, 0, 0, 0.5)";
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(x + columnWidth, y + rowHeight/2);
    canvasContext.lineTo(x, y + rowHeight);
    canvasContext.lineTo(x - columnWidth, y + rowHeight/2);
    canvasContext.closePath();
    canvasContext.fill();   
  }
  drawnSoldierCount(square);
}

// Highlights the mouse-overed square
function drawMouseOverTile() {
  var x = iso_x(columnWidth * mouseTile.col, rowHeight * mouseTile.row);
  var y = iso_y(columnWidth * mouseTile.col, rowHeight * mouseTile.row);
  var square = board[mouseTile.row][mouseTile.col];
  if (totalNumberOfSoldiers(square) > 0) {
    canvasContext.fillStyle = "rgba(255, 255, 255, 0.4)";
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(x + columnWidth, y + rowHeight/2);
    canvasContext.lineTo(x, y + rowHeight);
    canvasContext.lineTo(x - columnWidth, y + rowHeight/2);
    canvasContext.closePath();
    canvasContext.fill();
  } 
}

// Highlights the selected square
function drawSelectedTile() {
  var x = iso_x(columnWidth * selectedSquare.x, rowHeight * selectedSquare.y);
  var y = iso_y(columnWidth * selectedSquare.x, rowHeight * selectedSquare.y);  
  if (selectedSquare) {
    canvasContext.fillStyle = "rgba(255, 255, 255, 0.6)";
    canvasContext.beginPath();
    canvasContext.moveTo(x, y);
    canvasContext.lineTo(x + columnWidth, y + rowHeight/2);
    canvasContext.lineTo(x, y + rowHeight);
    canvasContext.lineTo(x - columnWidth, y + rowHeight/2);
    canvasContext.closePath();
    canvasContext.fill();
  }
}