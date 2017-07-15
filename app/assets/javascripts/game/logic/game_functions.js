// Game manipulating functions

// Updates the 'player' property of a square
function updateSquarePlayer(square) {
  if (square.contents.length > 0 && !square.HQ) {
    square.player = square.contents[0].player
  } else if (!square.HQ) {
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


// Switches the turn player and runs new turn functions 
function nextTurn() {
  $(".whos-turn").css({display: "none"});
  if (turn == playerOne) {
    $("#reds-turn").css({display: "inline-block"});
    turn = playerTwo;
  } else if (turn == playerTwo) {
    $("#blues-turn").css({display: "inline-block"});
    turn = playerOne;
  }
  addSoldiersToSquare(numberOfNewSoldiers(turn), turn, findHQ(turn));
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

// Removes all soldiers from a given square
function removeAllSoldiers(square) {
  square.contents = [];
}

// Winner logic
function winner(player) {
  if (player == playerOne) {
    findHQ(playerTwo).player = player;
  } else if (player == playerTwo) {
    findHQ(playerOne).player = player;
  }
  $("#container").html("<h1>Player " + player.playerNumber + " wins!</h1>");
}