// Helper functions for game logic

// Returns the square that is the players HQ
function findHQ(player) {
  for (var row = 0; row < ySize; row++) {
    for (var col = 0; col < xSize; col++) {
      var square = board[row][col];
      if (square.player == player && square.HQ) {
        return square;
      }
    }
  }
}

// Returns the number of active soldiers in a give square
function numberOfActiveSoldiers(square) {
  var totalNumberOfSoldier = square.contents.length;
  var counter = 0;

  for (var i = 0; i < totalNumberOfSoldier; i++) {
    if (square.contents[i].active) {
      counter++;
    }
  }

  return counter;
}

// Returns the number of inactive soldiers in a give square
function numberOfInactiveSoldiers(square) {
  return square.contents.length - numberOfActiveSoldiers(square);
}

// Returns the number of total soldiers (active and inactive) in a given square
function totalNumberOfSoldiers(square) {
  return square.contents.length;
}

// Returns whether or not two squares are adjacent
function areAdjacent(squareOne, squareTwo) { 
  if (squareOne.x < squareTwo.x + 2 &&
    squareOne.x > squareTwo.x - 2 &&
    squareOne.y < squareTwo.y + 2 &&
    squareOne.y > squareTwo.y - 2) {
    return true;
  } else {
    return false;
  }
}

// Return number of squares controlled by a given player
function numberOfSquaresControlled(player) {
  var counter = 0;

  for (var row = 0; row < ySize; row++) {
    for (var col = 0; col < xSize; col++) {
      var square = board[row][col];
      if (square.player == player) {
        counter++;
      }
    }
  }  
  return counter;
}

// Returns number of new soldiers based on number of squares controlled and
// the price of soldiers (global game variable)
function numberOfNewSoldiers(player) {
  return Math.floor(numberOfSquaresControlled(player) / costOfSoldier);
}