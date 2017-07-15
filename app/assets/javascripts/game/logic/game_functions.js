// Game manipulating functions

// Updates the 'player' property of a square
function updateSquarePlayer(square) {
  if (square.contents.length > 0) {
    square.player = square.contents[0].player
  } else {
    square.player = false;
  }
}

// Adds a given number of soldiers of a given player to a given square
function addSoldiersToSquare(numberOfSoldiers, player, square) {
  for (var i = 0; i < numberOfSoldiers; i++) {
    square.contents.push(new Soldier(player, true))
  }
  updateSquarePlayer(square);
}

// Removes a given number of active soldiers from a give square
function removeActiveSoldersFromSquare(numberOfTimes, square) {
  if (numberOfTimes > 0) {
    var numberOfSoldiers = square.contents.length;

    for (var i = 0; i < numberOfSoldiers; i++) {
      if (square.contents[i].active) {
        square.contents.splice(i, 1);
        break;
      }
    }
    removeActiveSoldersFromSquare(numberOfTimes - 1, square)
  }
  updateSquarePlayer(square);
}

// Removes a given number of inactive soldiers from a give square
function removeInactiveSoldersFromSquare(numberOfTimes, square) {
  if (numberOfTimes > 0) {
    var numberOfSoldiers = square.contents.length;

    for (var i = 0; i < numberOfSoldiers; i++) {
      if (!square.contents[i].active) {
        square.contents.splice(i, 1);
        break;
      }
    }
    removeInactiveSoldersFromSquare(numberOfTimes - 1, square)
  }
  updateSquarePlayer(square);
}

// Inactivates a given number of active soldiers in a given square
function inactivateSoldiers(numberOfTimes, square) {
  if (numberOfTimes > 0) {
    var numberOfSoldiers = square.contents.length;

    for (var i = 0; i < numberOfSoldiers; i++) {
      if (square.contents[i].active) {
        square.contents[i].active = false;
        break;
      }
    }
    inactivateSoldiers(numberOfTimes - 1, square);
  }
}

// Activates a given number of inactive soldiers in a given square
function activateSoldiers(numberOfTimes, square) {
  if (numberOfTimes > 0) {
    var numberOfSoldiers = square.contents.length;

    for (var i = 0; i < numberOfSoldiers; i++) {
      if (!square.contents[i].active) {
        square.contents[i].active = true;
        break;
      }
    }
    activateSoldiers(numberOfTimes - 1, square);
  }
}

// Deselects the selected square (yeah... I know...)
function deselectSquare() {
  selectedSquare = false;
}

// Runs validates and moves soldiers from one square to another
function soldiersMove(fromSquare, toSquare) {
  if (areAdjacent(fromSquare, toSquare)) {
    if (shiftDown) {
      var numberOfSoldiersToMove = numberOfActiveSoldiers(fromSquare);
    } else if (controlDown) {
      var numberOfSoldiersToMove = Math.floor(numberOfActiveSoldiers(fromSquare) / 2);
    } else {
      if (fromSquare.contents.length > 0) {
        var numberOfSoldiersToMove = 1;
      } else {
        var numberOfSoldiersToMove = 0;
      }
    }
    moveSoldiers(numberOfSoldiersToMove, fromSquare, toSquare)
  }
  deselectSquare();
}

// Performs the necessary steps of a move
function moveSoldiers(numberOfSoldiers, fromSquare, toSquare) {
  removeActiveSoldersFromSquare(numberOfSoldiers, fromSquare);
  addSoldiersToSquare(numberOfSoldiers, turn, toSquare);
  inactivateSoldiers(numberOfSoldiers, toSquare);
}

// Switches the turn player and runs new turn functions 
function nextTurn() {
  if (turn == playerOne) {
    turn = playerTwo;
  } else if (turn == playerTwo) {
    turn = playerOne;
  }
  activateAllSoldiers(turn);
}

// Activates all soldiers of a given player on the board
function activateAllSoldiers(player) {
  for (var row = 0; row < ySize; row++) {
    for (var col = 0; col < xSize; col++) {
      var square = board[row][col];
      if (square.player == player) {
        activateSoldiers(totalNumberOfSoldiers(square), square);
      }
    }
  }
}