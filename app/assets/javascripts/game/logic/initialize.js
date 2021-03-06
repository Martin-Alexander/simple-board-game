// Initialization game

function generateBoard() {
  for (var row = 0; row < ySize; row++) {
    board.push([]);
    for (var col = 0; col < xSize; col++) {
      newSquare = new Square(col, row);
      board[board.length - 1].push(newSquare);
    }
  }
}

function setPlayers() {
  playerOne = new Player(1);
  playerTwo = new Player(2);
  turn = playerOne;
}

function setHQs() {
  board[2][4].HQ = true;
  board[2][4].player = playerOne;
  board[7][5].HQ = true;
  board[7][5].player = playerTwo;
}


function generateInitialialSoldiers() {
  var playerOneHQSquare = findHQ(playerOne);
  var playerTwoHQSquare = findHQ(playerTwo);

  addSoldiersToSquare(10, playerOne, playerOneHQSquare)
  addSoldiersToSquare(10, playerTwo, playerTwoHQSquare)
}

function setToken() {
  myToken = Math.random();
}

function initializeGame() {
  generateBoard();
  setPlayers();
  setHQs();
  generateInitialialSoldiers(); 
  setToken();
}