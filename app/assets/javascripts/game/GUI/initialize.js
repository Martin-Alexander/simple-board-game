// Initialization gui

// Initializes canvas and canvas context
function setCanvas() {
  canvas = document.getElementById("main");
  canvasContext = canvas.getContext("2d");
}

// Uses canvas size and board dimensions to set variables that track number of
// rows/columns and thiers width and height
function setDimensions() {
  numberOfRows = board.length;
  numberOfColumns = board[0].length;
  rowHeight = canvas.height / numberOfRows;
  columnWidth = canvas.width / numberOfColumns;
}

function initializeGUI () {
  setCanvas();
  setDimensions();
}